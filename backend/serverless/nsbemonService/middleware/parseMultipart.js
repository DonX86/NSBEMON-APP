const Busboy = require('busboy');
const objectPathImmutable = require('object-path-immutable');

/**
 * Processes multipart form data given an AWS Lambda request
 * @param {object} Lambda request
 * @returns {object} Parsed Lambda request
 */
const processRequest = request =>
  new Promise((resolve, reject) => {
    const busboy = new Busboy({
      headers: {
        'content-type':
          request.headers['Content-Type'] || request.headers['content-type']
      }
    });

    // Will contain the results of parsing our files
    // object in the format
    // { query: "<graphql mutation>", variables: { ... file: upload ...}}
    let body = undefined;
    // The actual file data
    let stream = undefined;
    // An object with stream and additional meta data
    let upload = undefined;
    // Object with keys as file names, entries as paths in variables object above
    let fileMappings = undefined;

    // An interpretation of spec: https://github.com/jaydenseric/graphql-multipart-request-spec
    busboy.on('field', (fieldName, value) => {
      if (fieldName === 'operations') {
        body = JSON.parse(value);
      } else if (fieldName === 'map') {
        fileMappings = JSON.parse(value);
      }
    });

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      file.on('data', data => {
        stream = data;
      });

      file.on('end', () => {
        upload = {
          fieldname,
          stream,
          filename,
          encoding,
          mimetype
        };
      });
    });

    busboy.on('error', error => {
      reject(new Error(error));
    });

    busboy.on('finish', () => {
      if (body && upload && fileMappings) {
        const fieldName = upload.fieldname;
        delete upload.fieldName;

        // Set the file in the appropriate place
        body = objectPathImmutable.set(
          body,
          fileMappings[fieldName][0],
          upload
        );

        resolve(body);
      } else {
        reject(new Error('File parsing failed.'));
      }
    });

    busboy.write(request.body, request.isBase64Encoded ? 'base64' : 'binary');
    busboy.end();
  });

/**
 * Parsing middleware that handles multipart form data.
 * @returns {object} Middy middleware object
 */
module.exports.parseMultipart = () => {
  return {
    before: async (handler, next) => {
      const contentType =
        handler.event.headers['Content-Type'] ||
        handler.event.headers['content-type'];

      handler.event.headers['content-type'] = contentType;

      if (contentType.includes('multipart/form-data')) {
        handler.event.body = await processRequest(handler.event);
      }
      next();
    }
  };
};
