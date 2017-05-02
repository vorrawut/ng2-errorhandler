/*
    Handle Error Messages class. 
    
    There are a number of reasons why errors may occur, including the file not existing,
    the user not having permission to access the desired file, or the user cancelling the file upload.

    To properly diagnose the issue and handle the error, here is a full list of all the errors 
    our client will raise, and how they occurred.

    This class generate method to show error text. 

    Owner : Vorrawut
*/
export class ErrorMessages {
    constructor(private str: string = 'Error must decline') {
    }

    toString() {
        return this.str;
    }
}


// An unknown error occurred.
export class UnknownError extends ErrorMessages {
    constructor(str: string = 'An unknown error occurred.') {
        super(str);
    }
}

// No object exists at the desired reference.
export class NoObjectExistError extends ErrorMessages {
    constructor(str: string = 'No object exists at the desired reference.') {
        super(str);
    }
}

/* The maximum time limit on an operation (upload, download, delete, etc.) 
has been excceded. Try uploading again.*/
export class LimitExceedError extends ErrorMessages {
    constructor(str: string = 'The maximum time limit on an operation (upload, download, delete, etc.) has been excceded. Try uploading again.') {
        super(str);
    }
}


// User is not authorized to perform the desired action, check your security rules to ensure they are correct.
export class UnAuthorizationError extends ErrorMessages {
    constructor(str: string = 'User is not authorized to perform the desired action, check your security rules to ensure they are correct.') {
        super(str);
    }
}

// User is unauthenticated, please authenticate and try again.
export class UnAuthenticatedError extends ErrorMessages {
    constructor(str: string = 'User is unauthenticated, please authenticate and try again.') {
        super(str);
    }
}
// File on the client does not match the checksum of the file received by the server. Try uploading again.
export class InvalidCheckSumError extends ErrorMessages {
    constructor(str: string = 'File on the client does not match the checksum of the file received by the server. Try uploading again.') {
        super(str);
    }
}

// 	User canceled the operation.
export class CanceledError extends ErrorMessages {
    constructor(str: string = '	User canceled the operation.') {
        super(str);
    }
}


// 	Invalid event name provided. Must be one of [`running`, `progress`, `pause`]
export class InvalidEventNameError extends ErrorMessages {
    constructor(str: string = 'Invalid event name provided. Must be one of [`running`, `progress`, `pause`].') {
        super(str);
    }
}


// 	Invalid URL provided to refFromURL(). Must be of the form: http://192.168.103.10:3000/
export class InvalidURLError extends ErrorMessages {
    constructor(str: string = 'Invalid URL provided to refFromURL(). Must be of the form: http://192.168.103.10:3000/.') {
        super(str);
    }
}


// 	The argument passed to put() must be `File`, `Blob`, or `UInt8` Array. The argument passed to putString() must be a raw, `Base64`, or `Base64URL` string.
export class InvalidArgumentError extends ErrorMessages {
    constructor(str: string = 'The argument passed to put() must be `File`, `Blob`, or `UInt8` Array. The argument passed to putString() must be a raw, `Base64`, or `Base64URL` string.') {
        super(str);
    }
}



// 	Commonly occurs when the local file has changed (deleted, saved again, etc.). Try uploading again after verifying that the file hasn't changed.
export class CannotSliceBlobError extends ErrorMessages {
    constructor(str: string = 'Commonly occurs when the local file has changed (deleted, saved again, etc.). Try uploading again after verifying that the file has not changed.') {
        super(str);
    }
}

// 	File on the client does not match the size of the file recieved by the server. Try uploading again.
export class ServerWrongFileSizeError extends ErrorMessages {
    constructor(str: string = 'File on the client does not match the size of the file recieved by the server. Try uploading again.') {
        super(str);
    }
}

