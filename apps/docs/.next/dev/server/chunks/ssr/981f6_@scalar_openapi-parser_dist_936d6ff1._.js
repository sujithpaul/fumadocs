module.exports = [
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/schemas/v2.0/schema.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>schema_default
]);
var schema_default = {
    "title": "A JSON Schema for Swagger 2.0 API.",
    "id": "http://swagger.io/v2/schema.json#",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "required": [
        "swagger",
        "info",
        "paths"
    ],
    "additionalProperties": false,
    "patternProperties": {
        "^x-": {
            "$ref": "#/definitions/vendorExtension"
        }
    },
    "properties": {
        "swagger": {
            "type": "string",
            "enum": [
                "2.0"
            ],
            "description": "The Swagger version of this document."
        },
        "info": {
            "$ref": "#/definitions/info"
        },
        "host": {
            "type": "string",
            "pattern": "^[^{}/ :\\\\]+(?::\\d+)?$",
            "description": "The host (name or ip) of the API. Example: 'swagger.io'"
        },
        "basePath": {
            "type": "string",
            "pattern": "^/",
            "description": "The base path to the API. Example: '/api'."
        },
        "schemes": {
            "$ref": "#/definitions/schemesList"
        },
        "consumes": {
            "description": "A list of MIME types accepted by the API.",
            "allOf": [
                {
                    "$ref": "#/definitions/mediaTypeList"
                }
            ]
        },
        "produces": {
            "description": "A list of MIME types the API can produce.",
            "allOf": [
                {
                    "$ref": "#/definitions/mediaTypeList"
                }
            ]
        },
        "paths": {
            "$ref": "#/definitions/paths"
        },
        "definitions": {
            "$ref": "#/definitions/definitions"
        },
        "parameters": {
            "$ref": "#/definitions/parameterDefinitions"
        },
        "responses": {
            "$ref": "#/definitions/responseDefinitions"
        },
        "security": {
            "$ref": "#/definitions/security"
        },
        "securityDefinitions": {
            "$ref": "#/definitions/securityDefinitions"
        },
        "tags": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/tag"
            },
            "uniqueItems": true
        },
        "externalDocs": {
            "$ref": "#/definitions/externalDocs"
        }
    },
    "definitions": {
        "info": {
            "type": "object",
            "description": "General information about the API.",
            "required": [
                "version",
                "title"
            ],
            "additionalProperties": false,
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "properties": {
                "title": {
                    "type": "string",
                    "description": "A unique and precise title of the API."
                },
                "version": {
                    "type": "string",
                    "description": "A semantic version number of the API."
                },
                "description": {
                    "type": "string",
                    "description": "A longer description of the API. Should be different from the title.  GitHub Flavored Markdown is allowed."
                },
                "termsOfService": {
                    "type": "string",
                    "description": "The terms of service for the API."
                },
                "contact": {
                    "$ref": "#/definitions/contact"
                },
                "license": {
                    "$ref": "#/definitions/license"
                }
            }
        },
        "contact": {
            "type": "object",
            "description": "Contact information for the owners of the API.",
            "additionalProperties": false,
            "properties": {
                "name": {
                    "type": "string",
                    "description": "The identifying name of the contact person/organization."
                },
                "url": {
                    "type": "string",
                    "description": "The URL pointing to the contact information.",
                    "format": "uri"
                },
                "email": {
                    "type": "string",
                    "description": "The email address of the contact person/organization.",
                    "format": "email"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "license": {
            "type": "object",
            "required": [
                "name"
            ],
            "additionalProperties": false,
            "properties": {
                "name": {
                    "type": "string",
                    "description": "The name of the license type. It's encouraged to use an OSI compatible license."
                },
                "url": {
                    "type": "string",
                    "description": "The URL pointing to the license.",
                    "format": "uri"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "paths": {
            "type": "object",
            "description": "Relative paths to the individual endpoints. They must be relative to the 'basePath'.",
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                },
                "^/": {
                    "$ref": "#/definitions/pathItem"
                }
            },
            "additionalProperties": false
        },
        "definitions": {
            "type": "object",
            "additionalProperties": {
                "$ref": "#/definitions/schema"
            },
            "description": "One or more JSON objects describing the schemas being consumed and produced by the API."
        },
        "parameterDefinitions": {
            "type": "object",
            "additionalProperties": {
                "$ref": "#/definitions/parameter"
            },
            "description": "One or more JSON representations for parameters"
        },
        "responseDefinitions": {
            "type": "object",
            "additionalProperties": {
                "$ref": "#/definitions/response"
            },
            "description": "One or more JSON representations for responses"
        },
        "externalDocs": {
            "type": "object",
            "additionalProperties": false,
            "description": "information about external documentation",
            "required": [
                "url"
            ],
            "properties": {
                "description": {
                    "type": "string"
                },
                "url": {
                    "type": "string",
                    "format": "uri"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "examples": {
            "type": "object",
            "additionalProperties": true
        },
        "mimeType": {
            "type": "string",
            "description": "The MIME type of the HTTP message."
        },
        "operation": {
            "type": "object",
            "required": [
                "responses"
            ],
            "additionalProperties": false,
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "properties": {
                "tags": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    },
                    "uniqueItems": true
                },
                "summary": {
                    "type": "string",
                    "description": "A brief summary of the operation."
                },
                "description": {
                    "type": "string",
                    "description": "A longer description of the operation, GitHub Flavored Markdown is allowed."
                },
                "externalDocs": {
                    "$ref": "#/definitions/externalDocs"
                },
                "operationId": {
                    "type": "string",
                    "description": "A unique identifier of the operation."
                },
                "produces": {
                    "description": "A list of MIME types the API can produce.",
                    "allOf": [
                        {
                            "$ref": "#/definitions/mediaTypeList"
                        }
                    ]
                },
                "consumes": {
                    "description": "A list of MIME types the API can consume.",
                    "allOf": [
                        {
                            "$ref": "#/definitions/mediaTypeList"
                        }
                    ]
                },
                "parameters": {
                    "$ref": "#/definitions/parametersList"
                },
                "responses": {
                    "$ref": "#/definitions/responses"
                },
                "schemes": {
                    "$ref": "#/definitions/schemesList"
                },
                "deprecated": {
                    "type": "boolean",
                    "default": false
                },
                "security": {
                    "$ref": "#/definitions/security"
                }
            }
        },
        "pathItem": {
            "type": "object",
            "additionalProperties": false,
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "properties": {
                "$ref": {
                    "type": "string"
                },
                "get": {
                    "$ref": "#/definitions/operation"
                },
                "put": {
                    "$ref": "#/definitions/operation"
                },
                "post": {
                    "$ref": "#/definitions/operation"
                },
                "delete": {
                    "$ref": "#/definitions/operation"
                },
                "options": {
                    "$ref": "#/definitions/operation"
                },
                "head": {
                    "$ref": "#/definitions/operation"
                },
                "patch": {
                    "$ref": "#/definitions/operation"
                },
                "parameters": {
                    "$ref": "#/definitions/parametersList"
                }
            }
        },
        "responses": {
            "type": "object",
            "description": "Response objects names can either be any valid HTTP status code or 'default'.",
            "minProperties": 1,
            "additionalProperties": false,
            "patternProperties": {
                "^([0-9]{3})$|^(default)$": {
                    "$ref": "#/definitions/responseValue"
                },
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "not": {
                "type": "object",
                "additionalProperties": false,
                "patternProperties": {
                    "^x-": {
                        "$ref": "#/definitions/vendorExtension"
                    }
                }
            }
        },
        "responseValue": {
            "oneOf": [
                {
                    "$ref": "#/definitions/response"
                },
                {
                    "$ref": "#/definitions/jsonReference"
                }
            ]
        },
        "response": {
            "type": "object",
            "required": [
                "description"
            ],
            "properties": {
                "description": {
                    "type": "string"
                },
                "schema": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/schema"
                        },
                        {
                            "$ref": "#/definitions/fileSchema"
                        }
                    ]
                },
                "headers": {
                    "$ref": "#/definitions/headers"
                },
                "examples": {
                    "$ref": "#/definitions/examples"
                }
            },
            "additionalProperties": false,
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "headers": {
            "type": "object",
            "additionalProperties": {
                "$ref": "#/definitions/header"
            }
        },
        "header": {
            "type": "object",
            "additionalProperties": false,
            "required": [
                "type"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "string",
                        "number",
                        "integer",
                        "boolean",
                        "array"
                    ]
                },
                "format": {
                    "type": "string"
                },
                "items": {
                    "$ref": "#/definitions/primitivesItems"
                },
                "collectionFormat": {
                    "$ref": "#/definitions/collectionFormat"
                },
                "default": {
                    "$ref": "#/definitions/default"
                },
                "maximum": {
                    "$ref": "#/definitions/maximum"
                },
                "exclusiveMaximum": {
                    "$ref": "#/definitions/exclusiveMaximum"
                },
                "minimum": {
                    "$ref": "#/definitions/minimum"
                },
                "exclusiveMinimum": {
                    "$ref": "#/definitions/exclusiveMinimum"
                },
                "maxLength": {
                    "$ref": "#/definitions/maxLength"
                },
                "minLength": {
                    "$ref": "#/definitions/minLength"
                },
                "pattern": {
                    "$ref": "#/definitions/pattern"
                },
                "maxItems": {
                    "$ref": "#/definitions/maxItems"
                },
                "minItems": {
                    "$ref": "#/definitions/minItems"
                },
                "uniqueItems": {
                    "$ref": "#/definitions/uniqueItems"
                },
                "enum": {
                    "$ref": "#/definitions/enum"
                },
                "multipleOf": {
                    "$ref": "#/definitions/multipleOf"
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "vendorExtension": {
            "description": "Any property starting with x- is valid.",
            "additionalProperties": true,
            "additionalItems": true
        },
        "bodyParameter": {
            "type": "object",
            "required": [
                "name",
                "in",
                "schema"
            ],
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "properties": {
                "description": {
                    "type": "string",
                    "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
                },
                "name": {
                    "type": "string",
                    "description": "The name of the parameter."
                },
                "in": {
                    "type": "string",
                    "description": "Determines the location of the parameter.",
                    "enum": [
                        "body"
                    ]
                },
                "required": {
                    "type": "boolean",
                    "description": "Determines whether or not this parameter is required or optional.",
                    "default": false
                },
                "schema": {
                    "$ref": "#/definitions/schema"
                }
            },
            "additionalProperties": false
        },
        "headerParameterSubSchema": {
            "additionalProperties": false,
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "properties": {
                "required": {
                    "type": "boolean",
                    "description": "Determines whether or not this parameter is required or optional.",
                    "default": false
                },
                "in": {
                    "type": "string",
                    "description": "Determines the location of the parameter.",
                    "enum": [
                        "header"
                    ]
                },
                "description": {
                    "type": "string",
                    "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
                },
                "name": {
                    "type": "string",
                    "description": "The name of the parameter."
                },
                "type": {
                    "type": "string",
                    "enum": [
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                    ]
                },
                "format": {
                    "type": "string"
                },
                "items": {
                    "$ref": "#/definitions/primitivesItems"
                },
                "collectionFormat": {
                    "$ref": "#/definitions/collectionFormat"
                },
                "default": {
                    "$ref": "#/definitions/default"
                },
                "maximum": {
                    "$ref": "#/definitions/maximum"
                },
                "exclusiveMaximum": {
                    "$ref": "#/definitions/exclusiveMaximum"
                },
                "minimum": {
                    "$ref": "#/definitions/minimum"
                },
                "exclusiveMinimum": {
                    "$ref": "#/definitions/exclusiveMinimum"
                },
                "maxLength": {
                    "$ref": "#/definitions/maxLength"
                },
                "minLength": {
                    "$ref": "#/definitions/minLength"
                },
                "pattern": {
                    "$ref": "#/definitions/pattern"
                },
                "maxItems": {
                    "$ref": "#/definitions/maxItems"
                },
                "minItems": {
                    "$ref": "#/definitions/minItems"
                },
                "uniqueItems": {
                    "$ref": "#/definitions/uniqueItems"
                },
                "enum": {
                    "$ref": "#/definitions/enum"
                },
                "multipleOf": {
                    "$ref": "#/definitions/multipleOf"
                }
            }
        },
        "queryParameterSubSchema": {
            "additionalProperties": false,
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "properties": {
                "required": {
                    "type": "boolean",
                    "description": "Determines whether or not this parameter is required or optional.",
                    "default": false
                },
                "in": {
                    "type": "string",
                    "description": "Determines the location of the parameter.",
                    "enum": [
                        "query"
                    ]
                },
                "description": {
                    "type": "string",
                    "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
                },
                "name": {
                    "type": "string",
                    "description": "The name of the parameter."
                },
                "allowEmptyValue": {
                    "type": "boolean",
                    "default": false,
                    "description": "allows sending a parameter by name only or with an empty value."
                },
                "type": {
                    "type": "string",
                    "enum": [
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                    ]
                },
                "format": {
                    "type": "string"
                },
                "items": {
                    "$ref": "#/definitions/primitivesItems"
                },
                "collectionFormat": {
                    "$ref": "#/definitions/collectionFormatWithMulti"
                },
                "default": {
                    "$ref": "#/definitions/default"
                },
                "maximum": {
                    "$ref": "#/definitions/maximum"
                },
                "exclusiveMaximum": {
                    "$ref": "#/definitions/exclusiveMaximum"
                },
                "minimum": {
                    "$ref": "#/definitions/minimum"
                },
                "exclusiveMinimum": {
                    "$ref": "#/definitions/exclusiveMinimum"
                },
                "maxLength": {
                    "$ref": "#/definitions/maxLength"
                },
                "minLength": {
                    "$ref": "#/definitions/minLength"
                },
                "pattern": {
                    "$ref": "#/definitions/pattern"
                },
                "maxItems": {
                    "$ref": "#/definitions/maxItems"
                },
                "minItems": {
                    "$ref": "#/definitions/minItems"
                },
                "uniqueItems": {
                    "$ref": "#/definitions/uniqueItems"
                },
                "enum": {
                    "$ref": "#/definitions/enum"
                },
                "multipleOf": {
                    "$ref": "#/definitions/multipleOf"
                }
            }
        },
        "formDataParameterSubSchema": {
            "additionalProperties": false,
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "properties": {
                "required": {
                    "type": "boolean",
                    "description": "Determines whether or not this parameter is required or optional.",
                    "default": false
                },
                "in": {
                    "type": "string",
                    "description": "Determines the location of the parameter.",
                    "enum": [
                        "formData"
                    ]
                },
                "description": {
                    "type": "string",
                    "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
                },
                "name": {
                    "type": "string",
                    "description": "The name of the parameter."
                },
                "allowEmptyValue": {
                    "type": "boolean",
                    "default": false,
                    "description": "allows sending a parameter by name only or with an empty value."
                },
                "type": {
                    "type": "string",
                    "enum": [
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array",
                        "file"
                    ]
                },
                "format": {
                    "type": "string"
                },
                "items": {
                    "$ref": "#/definitions/primitivesItems"
                },
                "collectionFormat": {
                    "$ref": "#/definitions/collectionFormatWithMulti"
                },
                "default": {
                    "$ref": "#/definitions/default"
                },
                "maximum": {
                    "$ref": "#/definitions/maximum"
                },
                "exclusiveMaximum": {
                    "$ref": "#/definitions/exclusiveMaximum"
                },
                "minimum": {
                    "$ref": "#/definitions/minimum"
                },
                "exclusiveMinimum": {
                    "$ref": "#/definitions/exclusiveMinimum"
                },
                "maxLength": {
                    "$ref": "#/definitions/maxLength"
                },
                "minLength": {
                    "$ref": "#/definitions/minLength"
                },
                "pattern": {
                    "$ref": "#/definitions/pattern"
                },
                "maxItems": {
                    "$ref": "#/definitions/maxItems"
                },
                "minItems": {
                    "$ref": "#/definitions/minItems"
                },
                "uniqueItems": {
                    "$ref": "#/definitions/uniqueItems"
                },
                "enum": {
                    "$ref": "#/definitions/enum"
                },
                "multipleOf": {
                    "$ref": "#/definitions/multipleOf"
                }
            }
        },
        "pathParameterSubSchema": {
            "additionalProperties": false,
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "required": [
                "required"
            ],
            "properties": {
                "required": {
                    "type": "boolean",
                    "enum": [
                        true
                    ],
                    "description": "Determines whether or not this parameter is required or optional."
                },
                "in": {
                    "type": "string",
                    "description": "Determines the location of the parameter.",
                    "enum": [
                        "path"
                    ]
                },
                "description": {
                    "type": "string",
                    "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
                },
                "name": {
                    "type": "string",
                    "description": "The name of the parameter."
                },
                "type": {
                    "type": "string",
                    "enum": [
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                    ]
                },
                "format": {
                    "type": "string"
                },
                "items": {
                    "$ref": "#/definitions/primitivesItems"
                },
                "collectionFormat": {
                    "$ref": "#/definitions/collectionFormat"
                },
                "default": {
                    "$ref": "#/definitions/default"
                },
                "maximum": {
                    "$ref": "#/definitions/maximum"
                },
                "exclusiveMaximum": {
                    "$ref": "#/definitions/exclusiveMaximum"
                },
                "minimum": {
                    "$ref": "#/definitions/minimum"
                },
                "exclusiveMinimum": {
                    "$ref": "#/definitions/exclusiveMinimum"
                },
                "maxLength": {
                    "$ref": "#/definitions/maxLength"
                },
                "minLength": {
                    "$ref": "#/definitions/minLength"
                },
                "pattern": {
                    "$ref": "#/definitions/pattern"
                },
                "maxItems": {
                    "$ref": "#/definitions/maxItems"
                },
                "minItems": {
                    "$ref": "#/definitions/minItems"
                },
                "uniqueItems": {
                    "$ref": "#/definitions/uniqueItems"
                },
                "enum": {
                    "$ref": "#/definitions/enum"
                },
                "multipleOf": {
                    "$ref": "#/definitions/multipleOf"
                }
            }
        },
        "nonBodyParameter": {
            "type": "object",
            "required": [
                "name",
                "in",
                "type"
            ],
            "oneOf": [
                {
                    "$ref": "#/definitions/headerParameterSubSchema"
                },
                {
                    "$ref": "#/definitions/formDataParameterSubSchema"
                },
                {
                    "$ref": "#/definitions/queryParameterSubSchema"
                },
                {
                    "$ref": "#/definitions/pathParameterSubSchema"
                }
            ]
        },
        "parameter": {
            "oneOf": [
                {
                    "$ref": "#/definitions/bodyParameter"
                },
                {
                    "$ref": "#/definitions/nonBodyParameter"
                }
            ]
        },
        "schema": {
            "type": "object",
            "description": "A deterministic version of a JSON Schema object.",
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "properties": {
                "$ref": {
                    "type": "string"
                },
                "format": {
                    "type": "string"
                },
                "title": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/title"
                },
                "description": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/description"
                },
                "default": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/default"
                },
                "multipleOf": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/multipleOf"
                },
                "maximum": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/maximum"
                },
                "exclusiveMaximum": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/exclusiveMaximum"
                },
                "minimum": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/minimum"
                },
                "exclusiveMinimum": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/exclusiveMinimum"
                },
                "maxLength": {
                    "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
                },
                "minLength": {
                    "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
                },
                "pattern": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/pattern"
                },
                "maxItems": {
                    "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
                },
                "minItems": {
                    "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
                },
                "uniqueItems": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/uniqueItems"
                },
                "maxProperties": {
                    "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
                },
                "minProperties": {
                    "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
                },
                "required": {
                    "$ref": "http://json-schema.org/draft-04/schema#/definitions/stringArray"
                },
                "enum": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/enum"
                },
                "additionalProperties": {
                    "anyOf": [
                        {
                            "$ref": "#/definitions/schema"
                        },
                        {
                            "type": "boolean"
                        }
                    ],
                    "default": {}
                },
                "type": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/type"
                },
                "items": {
                    "anyOf": [
                        {
                            "$ref": "#/definitions/schema"
                        },
                        {
                            "type": "array",
                            "minItems": 1,
                            "items": {
                                "$ref": "#/definitions/schema"
                            }
                        }
                    ],
                    "default": {}
                },
                "allOf": {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                        "$ref": "#/definitions/schema"
                    }
                },
                "properties": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/definitions/schema"
                    },
                    "default": {}
                },
                "discriminator": {
                    "type": "string"
                },
                "readOnly": {
                    "type": "boolean",
                    "default": false
                },
                "xml": {
                    "$ref": "#/definitions/xml"
                },
                "externalDocs": {
                    "$ref": "#/definitions/externalDocs"
                },
                "example": {}
            },
            "additionalProperties": false
        },
        "fileSchema": {
            "type": "object",
            "description": "A deterministic version of a JSON Schema object.",
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "required": [
                "type"
            ],
            "properties": {
                "format": {
                    "type": "string"
                },
                "title": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/title"
                },
                "description": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/description"
                },
                "default": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/default"
                },
                "required": {
                    "$ref": "http://json-schema.org/draft-04/schema#/definitions/stringArray"
                },
                "type": {
                    "type": "string",
                    "enum": [
                        "file"
                    ]
                },
                "readOnly": {
                    "type": "boolean",
                    "default": false
                },
                "externalDocs": {
                    "$ref": "#/definitions/externalDocs"
                },
                "example": {}
            },
            "additionalProperties": false
        },
        "primitivesItems": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "string",
                        "number",
                        "integer",
                        "boolean",
                        "array"
                    ]
                },
                "format": {
                    "type": "string"
                },
                "items": {
                    "$ref": "#/definitions/primitivesItems"
                },
                "collectionFormat": {
                    "$ref": "#/definitions/collectionFormat"
                },
                "default": {
                    "$ref": "#/definitions/default"
                },
                "maximum": {
                    "$ref": "#/definitions/maximum"
                },
                "exclusiveMaximum": {
                    "$ref": "#/definitions/exclusiveMaximum"
                },
                "minimum": {
                    "$ref": "#/definitions/minimum"
                },
                "exclusiveMinimum": {
                    "$ref": "#/definitions/exclusiveMinimum"
                },
                "maxLength": {
                    "$ref": "#/definitions/maxLength"
                },
                "minLength": {
                    "$ref": "#/definitions/minLength"
                },
                "pattern": {
                    "$ref": "#/definitions/pattern"
                },
                "maxItems": {
                    "$ref": "#/definitions/maxItems"
                },
                "minItems": {
                    "$ref": "#/definitions/minItems"
                },
                "uniqueItems": {
                    "$ref": "#/definitions/uniqueItems"
                },
                "enum": {
                    "$ref": "#/definitions/enum"
                },
                "multipleOf": {
                    "$ref": "#/definitions/multipleOf"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "security": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/securityRequirement"
            },
            "uniqueItems": true
        },
        "securityRequirement": {
            "type": "object",
            "additionalProperties": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "uniqueItems": true
            }
        },
        "xml": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "name": {
                    "type": "string"
                },
                "namespace": {
                    "type": "string"
                },
                "prefix": {
                    "type": "string"
                },
                "attribute": {
                    "type": "boolean",
                    "default": false
                },
                "wrapped": {
                    "type": "boolean",
                    "default": false
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "tag": {
            "type": "object",
            "additionalProperties": false,
            "required": [
                "name"
            ],
            "properties": {
                "name": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "externalDocs": {
                    "$ref": "#/definitions/externalDocs"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "securityDefinitions": {
            "type": "object",
            "additionalProperties": {
                "oneOf": [
                    {
                        "$ref": "#/definitions/basicAuthenticationSecurity"
                    },
                    {
                        "$ref": "#/definitions/apiKeySecurity"
                    },
                    {
                        "$ref": "#/definitions/oauth2ImplicitSecurity"
                    },
                    {
                        "$ref": "#/definitions/oauth2PasswordSecurity"
                    },
                    {
                        "$ref": "#/definitions/oauth2ApplicationSecurity"
                    },
                    {
                        "$ref": "#/definitions/oauth2AccessCodeSecurity"
                    }
                ]
            }
        },
        "basicAuthenticationSecurity": {
            "type": "object",
            "additionalProperties": false,
            "required": [
                "type"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "basic"
                    ]
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "apiKeySecurity": {
            "type": "object",
            "additionalProperties": false,
            "required": [
                "type",
                "name",
                "in"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "apiKey"
                    ]
                },
                "name": {
                    "type": "string"
                },
                "in": {
                    "type": "string",
                    "enum": [
                        "header",
                        "query"
                    ]
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "oauth2ImplicitSecurity": {
            "type": "object",
            "additionalProperties": false,
            "required": [
                "type",
                "flow",
                "authorizationUrl"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "oauth2"
                    ]
                },
                "flow": {
                    "type": "string",
                    "enum": [
                        "implicit"
                    ]
                },
                "scopes": {
                    "$ref": "#/definitions/oauth2Scopes"
                },
                "authorizationUrl": {
                    "type": "string",
                    "format": "uri"
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "oauth2PasswordSecurity": {
            "type": "object",
            "additionalProperties": false,
            "required": [
                "type",
                "flow",
                "tokenUrl"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "oauth2"
                    ]
                },
                "flow": {
                    "type": "string",
                    "enum": [
                        "password"
                    ]
                },
                "scopes": {
                    "$ref": "#/definitions/oauth2Scopes"
                },
                "tokenUrl": {
                    "type": "string",
                    "format": "uri"
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "oauth2ApplicationSecurity": {
            "type": "object",
            "additionalProperties": false,
            "required": [
                "type",
                "flow",
                "tokenUrl"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "oauth2"
                    ]
                },
                "flow": {
                    "type": "string",
                    "enum": [
                        "application"
                    ]
                },
                "scopes": {
                    "$ref": "#/definitions/oauth2Scopes"
                },
                "tokenUrl": {
                    "type": "string",
                    "format": "uri"
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "oauth2AccessCodeSecurity": {
            "type": "object",
            "additionalProperties": false,
            "required": [
                "type",
                "flow",
                "authorizationUrl",
                "tokenUrl"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "oauth2"
                    ]
                },
                "flow": {
                    "type": "string",
                    "enum": [
                        "accessCode"
                    ]
                },
                "scopes": {
                    "$ref": "#/definitions/oauth2Scopes"
                },
                "authorizationUrl": {
                    "type": "string",
                    "format": "uri"
                },
                "tokenUrl": {
                    "type": "string",
                    "format": "uri"
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "oauth2Scopes": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            }
        },
        "mediaTypeList": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/mimeType"
            },
            "uniqueItems": true
        },
        "parametersList": {
            "type": "array",
            "description": "The parameters needed to send a valid API call.",
            "additionalItems": false,
            "items": {
                "oneOf": [
                    {
                        "$ref": "#/definitions/parameter"
                    },
                    {
                        "$ref": "#/definitions/jsonReference"
                    }
                ]
            },
            "uniqueItems": true
        },
        "schemesList": {
            "type": "array",
            "description": "The transfer protocol of the API.",
            "items": {
                "type": "string",
                "enum": [
                    "http",
                    "https",
                    "ws",
                    "wss"
                ]
            },
            "uniqueItems": true
        },
        "collectionFormat": {
            "type": "string",
            "enum": [
                "csv",
                "ssv",
                "tsv",
                "pipes"
            ],
            "default": "csv"
        },
        "collectionFormatWithMulti": {
            "type": "string",
            "enum": [
                "csv",
                "ssv",
                "tsv",
                "pipes",
                "multi"
            ],
            "default": "csv"
        },
        "title": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/title"
        },
        "description": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/description"
        },
        "default": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/default"
        },
        "multipleOf": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/multipleOf"
        },
        "maximum": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/maximum"
        },
        "exclusiveMaximum": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/exclusiveMaximum"
        },
        "minimum": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/minimum"
        },
        "exclusiveMinimum": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/exclusiveMinimum"
        },
        "maxLength": {
            "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
        },
        "minLength": {
            "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
        },
        "pattern": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/pattern"
        },
        "maxItems": {
            "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
        },
        "minItems": {
            "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
        },
        "uniqueItems": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/uniqueItems"
        },
        "enum": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/enum"
        },
        "jsonReference": {
            "type": "object",
            "required": [
                "$ref"
            ],
            "additionalProperties": false,
            "properties": {
                "$ref": {
                    "type": "string"
                }
            }
        }
    }
};
;
 //# sourceMappingURL=schema.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/schemas/v3.0/schema.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>schema_default
]);
var schema_default = {
    "id": "https://spec.openapis.org/oas/3.0/schema/2021-09-28",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "description": "The description of OpenAPI v3.0.x documents, as defined by https://spec.openapis.org/oas/v3.0.3",
    "type": "object",
    "required": [
        "openapi",
        "info",
        "paths"
    ],
    "properties": {
        "openapi": {
            "type": "string",
            "pattern": "^3\\.0\\.\\d(-.+)?$"
        },
        "info": {
            "$ref": "#/definitions/Info"
        },
        "externalDocs": {
            "$ref": "#/definitions/ExternalDocumentation"
        },
        "servers": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/Server"
            }
        },
        "security": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/SecurityRequirement"
            }
        },
        "tags": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/Tag"
            },
            "uniqueItems": true
        },
        "paths": {
            "$ref": "#/definitions/Paths"
        },
        "components": {
            "$ref": "#/definitions/Components"
        }
    },
    "patternProperties": {
        "^x-": {}
    },
    "additionalProperties": false,
    "definitions": {
        "Reference": {
            "type": "object",
            "required": [
                "$ref"
            ],
            "patternProperties": {
                "^\\$ref$": {
                    "type": "string",
                    "format": "uri-reference"
                }
            }
        },
        "Info": {
            "type": "object",
            "required": [
                "title",
                "version"
            ],
            "properties": {
                "title": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "termsOfService": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "contact": {
                    "$ref": "#/definitions/Contact"
                },
                "license": {
                    "$ref": "#/definitions/License"
                },
                "version": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Contact": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "url": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "email": {
                    "type": "string",
                    "format": "email"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "License": {
            "type": "object",
            "required": [
                "name"
            ],
            "properties": {
                "name": {
                    "type": "string"
                },
                "url": {
                    "type": "string",
                    "format": "uri-reference"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Server": {
            "type": "object",
            "required": [
                "url"
            ],
            "properties": {
                "url": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "variables": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/definitions/ServerVariable"
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "ServerVariable": {
            "type": "object",
            "required": [
                "default"
            ],
            "properties": {
                "enum": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "default": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Components": {
            "type": "object",
            "properties": {
                "schemas": {
                    "type": "object",
                    "patternProperties": {
                        "^[a-zA-Z0-9\\.\\-_]+$": {
                            "oneOf": [
                                {
                                    "$ref": "#/definitions/Schema"
                                },
                                {
                                    "$ref": "#/definitions/Reference"
                                }
                            ]
                        }
                    }
                },
                "responses": {
                    "type": "object",
                    "patternProperties": {
                        "^[a-zA-Z0-9\\.\\-_]+$": {
                            "oneOf": [
                                {
                                    "$ref": "#/definitions/Reference"
                                },
                                {
                                    "$ref": "#/definitions/Response"
                                }
                            ]
                        }
                    }
                },
                "parameters": {
                    "type": "object",
                    "patternProperties": {
                        "^[a-zA-Z0-9\\.\\-_]+$": {
                            "oneOf": [
                                {
                                    "$ref": "#/definitions/Reference"
                                },
                                {
                                    "$ref": "#/definitions/Parameter"
                                }
                            ]
                        }
                    }
                },
                "examples": {
                    "type": "object",
                    "patternProperties": {
                        "^[a-zA-Z0-9\\.\\-_]+$": {
                            "oneOf": [
                                {
                                    "$ref": "#/definitions/Reference"
                                },
                                {
                                    "$ref": "#/definitions/Example"
                                }
                            ]
                        }
                    }
                },
                "requestBodies": {
                    "type": "object",
                    "patternProperties": {
                        "^[a-zA-Z0-9\\.\\-_]+$": {
                            "oneOf": [
                                {
                                    "$ref": "#/definitions/Reference"
                                },
                                {
                                    "$ref": "#/definitions/RequestBody"
                                }
                            ]
                        }
                    }
                },
                "headers": {
                    "type": "object",
                    "patternProperties": {
                        "^[a-zA-Z0-9\\.\\-_]+$": {
                            "oneOf": [
                                {
                                    "$ref": "#/definitions/Reference"
                                },
                                {
                                    "$ref": "#/definitions/Header"
                                }
                            ]
                        }
                    }
                },
                "securitySchemes": {
                    "type": "object",
                    "patternProperties": {
                        "^[a-zA-Z0-9\\.\\-_]+$": {
                            "oneOf": [
                                {
                                    "$ref": "#/definitions/Reference"
                                },
                                {
                                    "$ref": "#/definitions/SecurityScheme"
                                }
                            ]
                        }
                    }
                },
                "links": {
                    "type": "object",
                    "patternProperties": {
                        "^[a-zA-Z0-9\\.\\-_]+$": {
                            "oneOf": [
                                {
                                    "$ref": "#/definitions/Reference"
                                },
                                {
                                    "$ref": "#/definitions/Link"
                                }
                            ]
                        }
                    }
                },
                "callbacks": {
                    "type": "object",
                    "patternProperties": {
                        "^[a-zA-Z0-9\\.\\-_]+$": {
                            "oneOf": [
                                {
                                    "$ref": "#/definitions/Reference"
                                },
                                {
                                    "$ref": "#/definitions/Callback"
                                }
                            ]
                        }
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Schema": {
            "type": "object",
            "properties": {
                "title": {
                    "type": "string"
                },
                "multipleOf": {
                    "type": "number",
                    "minimum": 0,
                    "exclusiveMinimum": true
                },
                "maximum": {
                    "type": "number"
                },
                "exclusiveMaximum": {
                    "type": "boolean",
                    "default": false
                },
                "minimum": {
                    "type": "number"
                },
                "exclusiveMinimum": {
                    "type": "boolean",
                    "default": false
                },
                "maxLength": {
                    "type": "integer",
                    "minimum": 0
                },
                "minLength": {
                    "type": "integer",
                    "minimum": 0,
                    "default": 0
                },
                "pattern": {
                    "type": "string",
                    "format": "regex"
                },
                "maxItems": {
                    "type": "integer",
                    "minimum": 0
                },
                "minItems": {
                    "type": "integer",
                    "minimum": 0,
                    "default": 0
                },
                "uniqueItems": {
                    "type": "boolean",
                    "default": false
                },
                "maxProperties": {
                    "type": "integer",
                    "minimum": 0
                },
                "minProperties": {
                    "type": "integer",
                    "minimum": 0,
                    "default": 0
                },
                "required": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    },
                    "minItems": 1,
                    "uniqueItems": true
                },
                "enum": {
                    "type": "array",
                    "items": {},
                    "minItems": 1,
                    "uniqueItems": false
                },
                "type": {
                    "type": "string",
                    "enum": [
                        "array",
                        "boolean",
                        "integer",
                        "number",
                        "object",
                        "string"
                    ]
                },
                "not": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/Schema"
                        },
                        {
                            "$ref": "#/definitions/Reference"
                        }
                    ]
                },
                "allOf": {
                    "type": "array",
                    "items": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Schema"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                },
                "oneOf": {
                    "type": "array",
                    "items": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Schema"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                },
                "anyOf": {
                    "type": "array",
                    "items": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Schema"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                },
                "items": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/Schema"
                        },
                        {
                            "$ref": "#/definitions/Reference"
                        }
                    ]
                },
                "properties": {
                    "type": "object",
                    "additionalProperties": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Schema"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                },
                "additionalProperties": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/Schema"
                        },
                        {
                            "$ref": "#/definitions/Reference"
                        },
                        {
                            "type": "boolean"
                        }
                    ],
                    "default": true
                },
                "description": {
                    "type": "string"
                },
                "format": {
                    "type": "string"
                },
                "default": {},
                "nullable": {
                    "type": "boolean",
                    "default": false
                },
                "discriminator": {
                    "$ref": "#/definitions/Discriminator"
                },
                "readOnly": {
                    "type": "boolean",
                    "default": false
                },
                "writeOnly": {
                    "type": "boolean",
                    "default": false
                },
                "example": {},
                "externalDocs": {
                    "$ref": "#/definitions/ExternalDocumentation"
                },
                "deprecated": {
                    "type": "boolean",
                    "default": false
                },
                "xml": {
                    "$ref": "#/definitions/XML"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Discriminator": {
            "type": "object",
            "required": [
                "propertyName"
            ],
            "properties": {
                "propertyName": {
                    "type": "string"
                },
                "mapping": {
                    "type": "object",
                    "additionalProperties": {
                        "type": "string"
                    }
                }
            }
        },
        "XML": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "namespace": {
                    "type": "string",
                    "format": "uri"
                },
                "prefix": {
                    "type": "string"
                },
                "attribute": {
                    "type": "boolean",
                    "default": false
                },
                "wrapped": {
                    "type": "boolean",
                    "default": false
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Response": {
            "type": "object",
            "required": [
                "description"
            ],
            "properties": {
                "description": {
                    "type": "string"
                },
                "headers": {
                    "type": "object",
                    "additionalProperties": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Header"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                },
                "content": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/definitions/MediaType"
                    }
                },
                "links": {
                    "type": "object",
                    "additionalProperties": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Link"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "MediaType": {
            "type": "object",
            "properties": {
                "schema": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/Schema"
                        },
                        {
                            "$ref": "#/definitions/Reference"
                        }
                    ]
                },
                "example": {},
                "examples": {
                    "type": "object",
                    "additionalProperties": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Example"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                },
                "encoding": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/definitions/Encoding"
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false,
            "allOf": [
                {
                    "$ref": "#/definitions/ExampleXORExamples"
                }
            ]
        },
        "Example": {
            "type": "object",
            "properties": {
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "value": {},
                "externalValue": {
                    "type": "string",
                    "format": "uri-reference"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Header": {
            "type": "object",
            "properties": {
                "description": {
                    "type": "string"
                },
                "required": {
                    "type": "boolean",
                    "default": false
                },
                "deprecated": {
                    "type": "boolean",
                    "default": false
                },
                "allowEmptyValue": {
                    "type": "boolean",
                    "default": false
                },
                "style": {
                    "type": "string",
                    "enum": [
                        "simple"
                    ],
                    "default": "simple"
                },
                "explode": {
                    "type": "boolean"
                },
                "allowReserved": {
                    "type": "boolean",
                    "default": false
                },
                "schema": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/Schema"
                        },
                        {
                            "$ref": "#/definitions/Reference"
                        }
                    ]
                },
                "content": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/definitions/MediaType"
                    },
                    "minProperties": 1,
                    "maxProperties": 1
                },
                "example": {},
                "examples": {
                    "type": "object",
                    "additionalProperties": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Example"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false,
            "allOf": [
                {
                    "$ref": "#/definitions/ExampleXORExamples"
                },
                {
                    "$ref": "#/definitions/SchemaXORContent"
                }
            ]
        },
        "Paths": {
            "type": "object",
            "patternProperties": {
                "^\\/": {
                    "$ref": "#/definitions/PathItem"
                },
                "^x-": {}
            },
            "additionalProperties": false
        },
        "PathItem": {
            "type": "object",
            "properties": {
                "$ref": {
                    "type": "string"
                },
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "servers": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/Server"
                    }
                },
                "parameters": {
                    "type": "array",
                    "items": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Parameter"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    },
                    "uniqueItems": true
                }
            },
            "patternProperties": {
                "^(get|put|post|delete|options|head|patch|trace)$": {
                    "$ref": "#/definitions/Operation"
                },
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Operation": {
            "type": "object",
            "required": [
                "responses"
            ],
            "properties": {
                "tags": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "externalDocs": {
                    "$ref": "#/definitions/ExternalDocumentation"
                },
                "operationId": {
                    "type": "string"
                },
                "parameters": {
                    "type": "array",
                    "items": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Parameter"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    },
                    "uniqueItems": true
                },
                "requestBody": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/RequestBody"
                        },
                        {
                            "$ref": "#/definitions/Reference"
                        }
                    ]
                },
                "responses": {
                    "$ref": "#/definitions/Responses"
                },
                "callbacks": {
                    "type": "object",
                    "additionalProperties": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Callback"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                },
                "deprecated": {
                    "type": "boolean",
                    "default": false
                },
                "security": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/SecurityRequirement"
                    }
                },
                "servers": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/Server"
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Responses": {
            "type": "object",
            "properties": {
                "default": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/Response"
                        },
                        {
                            "$ref": "#/definitions/Reference"
                        }
                    ]
                }
            },
            "patternProperties": {
                "^[1-5](?:\\d{2}|XX)$": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/Response"
                        },
                        {
                            "$ref": "#/definitions/Reference"
                        }
                    ]
                },
                "^x-": {}
            },
            "minProperties": 1,
            "additionalProperties": false
        },
        "SecurityRequirement": {
            "type": "object",
            "additionalProperties": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            }
        },
        "Tag": {
            "type": "object",
            "required": [
                "name"
            ],
            "properties": {
                "name": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "externalDocs": {
                    "$ref": "#/definitions/ExternalDocumentation"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "ExternalDocumentation": {
            "type": "object",
            "required": [
                "url"
            ],
            "properties": {
                "description": {
                    "type": "string"
                },
                "url": {
                    "type": "string",
                    "format": "uri-reference"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "ExampleXORExamples": {
            "description": "Example and examples are mutually exclusive",
            "not": {
                "required": [
                    "example",
                    "examples"
                ]
            }
        },
        "SchemaXORContent": {
            "description": "Schema and content are mutually exclusive, at least one is required",
            "not": {
                "required": [
                    "schema",
                    "content"
                ]
            },
            "oneOf": [
                {
                    "required": [
                        "schema"
                    ]
                },
                {
                    "required": [
                        "content"
                    ],
                    "description": "Some properties are not allowed if content is present",
                    "allOf": [
                        {
                            "not": {
                                "required": [
                                    "style"
                                ]
                            }
                        },
                        {
                            "not": {
                                "required": [
                                    "explode"
                                ]
                            }
                        },
                        {
                            "not": {
                                "required": [
                                    "allowReserved"
                                ]
                            }
                        },
                        {
                            "not": {
                                "required": [
                                    "example"
                                ]
                            }
                        },
                        {
                            "not": {
                                "required": [
                                    "examples"
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        "Parameter": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "in": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "required": {
                    "type": "boolean",
                    "default": false
                },
                "deprecated": {
                    "type": "boolean",
                    "default": false
                },
                "allowEmptyValue": {
                    "type": "boolean",
                    "default": false
                },
                "style": {
                    "type": "string"
                },
                "explode": {
                    "type": "boolean"
                },
                "allowReserved": {
                    "type": "boolean",
                    "default": false
                },
                "schema": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/Schema"
                        },
                        {
                            "$ref": "#/definitions/Reference"
                        }
                    ]
                },
                "content": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/definitions/MediaType"
                    },
                    "minProperties": 1,
                    "maxProperties": 1
                },
                "example": {},
                "examples": {
                    "type": "object",
                    "additionalProperties": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Example"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false,
            "required": [
                "name",
                "in"
            ],
            "allOf": [
                {
                    "$ref": "#/definitions/ExampleXORExamples"
                },
                {
                    "$ref": "#/definitions/SchemaXORContent"
                },
                {
                    "$ref": "#/definitions/ParameterLocation"
                }
            ]
        },
        "ParameterLocation": {
            "description": "Parameter location",
            "oneOf": [
                {
                    "description": "Parameter in path",
                    "required": [
                        "required"
                    ],
                    "properties": {
                        "in": {
                            "enum": [
                                "path"
                            ]
                        },
                        "style": {
                            "enum": [
                                "matrix",
                                "label",
                                "simple"
                            ],
                            "default": "simple"
                        },
                        "required": {
                            "enum": [
                                true
                            ]
                        }
                    }
                },
                {
                    "description": "Parameter in query",
                    "properties": {
                        "in": {
                            "enum": [
                                "query"
                            ]
                        },
                        "style": {
                            "enum": [
                                "form",
                                "spaceDelimited",
                                "pipeDelimited",
                                "deepObject"
                            ],
                            "default": "form"
                        }
                    }
                },
                {
                    "description": "Parameter in header",
                    "properties": {
                        "in": {
                            "enum": [
                                "header"
                            ]
                        },
                        "style": {
                            "enum": [
                                "simple"
                            ],
                            "default": "simple"
                        }
                    }
                },
                {
                    "description": "Parameter in cookie",
                    "properties": {
                        "in": {
                            "enum": [
                                "cookie"
                            ]
                        },
                        "style": {
                            "enum": [
                                "form"
                            ],
                            "default": "form"
                        }
                    }
                }
            ]
        },
        "RequestBody": {
            "type": "object",
            "required": [
                "content"
            ],
            "properties": {
                "description": {
                    "type": "string"
                },
                "content": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/definitions/MediaType"
                    }
                },
                "required": {
                    "type": "boolean",
                    "default": false
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "SecurityScheme": {
            "oneOf": [
                {
                    "$ref": "#/definitions/APIKeySecurityScheme"
                },
                {
                    "$ref": "#/definitions/HTTPSecurityScheme"
                },
                {
                    "$ref": "#/definitions/OAuth2SecurityScheme"
                },
                {
                    "$ref": "#/definitions/OpenIdConnectSecurityScheme"
                }
            ]
        },
        "APIKeySecurityScheme": {
            "type": "object",
            "required": [
                "type",
                "name",
                "in"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "apiKey"
                    ]
                },
                "name": {
                    "type": "string"
                },
                "in": {
                    "type": "string",
                    "enum": [
                        "header",
                        "query",
                        "cookie"
                    ]
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "HTTPSecurityScheme": {
            "type": "object",
            "required": [
                "scheme",
                "type"
            ],
            "properties": {
                "scheme": {
                    "type": "string"
                },
                "bearerFormat": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "type": {
                    "type": "string",
                    "enum": [
                        "http"
                    ]
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false,
            "oneOf": [
                {
                    "description": "Bearer",
                    "properties": {
                        "scheme": {
                            "type": "string",
                            "pattern": "^[Bb][Ee][Aa][Rr][Ee][Rr]$"
                        }
                    }
                },
                {
                    "description": "Non Bearer",
                    "not": {
                        "required": [
                            "bearerFormat"
                        ]
                    },
                    "properties": {
                        "scheme": {
                            "not": {
                                "type": "string",
                                "pattern": "^[Bb][Ee][Aa][Rr][Ee][Rr]$"
                            }
                        }
                    }
                }
            ]
        },
        "OAuth2SecurityScheme": {
            "type": "object",
            "required": [
                "type",
                "flows"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "oauth2"
                    ]
                },
                "flows": {
                    "$ref": "#/definitions/OAuthFlows"
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "OpenIdConnectSecurityScheme": {
            "type": "object",
            "required": [
                "type",
                "openIdConnectUrl"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "openIdConnect"
                    ]
                },
                "openIdConnectUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "OAuthFlows": {
            "type": "object",
            "properties": {
                "implicit": {
                    "$ref": "#/definitions/ImplicitOAuthFlow"
                },
                "password": {
                    "$ref": "#/definitions/PasswordOAuthFlow"
                },
                "clientCredentials": {
                    "$ref": "#/definitions/ClientCredentialsFlow"
                },
                "authorizationCode": {
                    "$ref": "#/definitions/AuthorizationCodeOAuthFlow"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "ImplicitOAuthFlow": {
            "type": "object",
            "required": [
                "authorizationUrl",
                "scopes"
            ],
            "properties": {
                "authorizationUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "refreshUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "scopes": {
                    "type": "object",
                    "additionalProperties": {
                        "type": "string"
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "PasswordOAuthFlow": {
            "type": "object",
            "required": [
                "tokenUrl",
                "scopes"
            ],
            "properties": {
                "tokenUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "refreshUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "scopes": {
                    "type": "object",
                    "additionalProperties": {
                        "type": "string"
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "ClientCredentialsFlow": {
            "type": "object",
            "required": [
                "tokenUrl",
                "scopes"
            ],
            "properties": {
                "tokenUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "refreshUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "scopes": {
                    "type": "object",
                    "additionalProperties": {
                        "type": "string"
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "AuthorizationCodeOAuthFlow": {
            "type": "object",
            "required": [
                "authorizationUrl",
                "tokenUrl",
                "scopes"
            ],
            "properties": {
                "authorizationUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "tokenUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "refreshUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "scopes": {
                    "type": "object",
                    "additionalProperties": {
                        "type": "string"
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Link": {
            "type": "object",
            "properties": {
                "operationId": {
                    "type": "string"
                },
                "operationRef": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "parameters": {
                    "type": "object",
                    "additionalProperties": {}
                },
                "requestBody": {},
                "description": {
                    "type": "string"
                },
                "server": {
                    "$ref": "#/definitions/Server"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false,
            "not": {
                "description": "Operation Id and Operation Ref are mutually exclusive",
                "required": [
                    "operationId",
                    "operationRef"
                ]
            }
        },
        "Callback": {
            "type": "object",
            "additionalProperties": {
                "$ref": "#/definitions/PathItem"
            },
            "patternProperties": {
                "^x-": {}
            }
        },
        "Encoding": {
            "type": "object",
            "properties": {
                "contentType": {
                    "type": "string"
                },
                "headers": {
                    "type": "object",
                    "additionalProperties": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Header"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                },
                "style": {
                    "type": "string",
                    "enum": [
                        "form",
                        "spaceDelimited",
                        "pipeDelimited",
                        "deepObject"
                    ]
                },
                "explode": {
                    "type": "boolean"
                },
                "allowReserved": {
                    "type": "boolean",
                    "default": false
                }
            },
            "additionalProperties": false
        }
    }
};
;
 //# sourceMappingURL=schema.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/schemas/v3.1/schema.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>schema_default
]);
var schema_default = {
    "$id": "https://spec.openapis.org/oas/3.1/schema/2022-10-07",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "description": "The description of OpenAPI v3.1.x documents without schema validation, as defined by https://spec.openapis.org/oas/v3.1.0",
    "type": "object",
    "properties": {
        "openapi": {
            "type": "string",
            "pattern": "^3\\.1\\.\\d+(-.+)?$"
        },
        "info": {
            "$ref": "#/$defs/info"
        },
        "jsonSchemaDialect": {
            "type": "string",
            "format": "uri-reference",
            "default": "https://spec.openapis.org/oas/3.1/dialect/base"
        },
        "servers": {
            "type": "array",
            "items": {
                "$ref": "#/$defs/server"
            },
            "default": [
                {
                    "url": "/"
                }
            ]
        },
        "paths": {
            "$ref": "#/$defs/paths"
        },
        "webhooks": {
            "type": "object",
            "additionalProperties": {
                "$ref": "#/$defs/path-item-or-reference"
            }
        },
        "components": {
            "$ref": "#/$defs/components"
        },
        "security": {
            "type": "array",
            "items": {
                "$ref": "#/$defs/security-requirement"
            }
        },
        "tags": {
            "type": "array",
            "items": {
                "$ref": "#/$defs/tag"
            }
        },
        "externalDocs": {
            "$ref": "#/$defs/external-documentation"
        }
    },
    "required": [
        "openapi",
        "info"
    ],
    "anyOf": [
        {
            "required": [
                "paths"
            ]
        },
        {
            "required": [
                "components"
            ]
        },
        {
            "required": [
                "webhooks"
            ]
        }
    ],
    "$ref": "#/$defs/specification-extensions",
    "unevaluatedProperties": false,
    "$defs": {
        "info": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#info-object",
            "type": "object",
            "properties": {
                "title": {
                    "type": "string"
                },
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "termsOfService": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "contact": {
                    "$ref": "#/$defs/contact"
                },
                "license": {
                    "$ref": "#/$defs/license"
                },
                "version": {
                    "type": "string"
                }
            },
            "required": [
                "title",
                "version"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "contact": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#contact-object",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "url": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "email": {
                    "type": "string",
                    "format": "email"
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "license": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#license-object",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "identifier": {
                    "type": "string"
                },
                "url": {
                    "type": "string",
                    "format": "uri-reference"
                }
            },
            "required": [
                "name"
            ],
            "dependentSchemas": {
                "identifier": {
                    "not": {
                        "required": [
                            "url"
                        ]
                    }
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "server": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#server-object",
            "type": "object",
            "properties": {
                "url": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "variables": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/server-variable"
                    }
                }
            },
            "required": [
                "url"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "server-variable": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#server-variable-object",
            "type": "object",
            "properties": {
                "enum": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    },
                    "minItems": 1
                },
                "default": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                }
            },
            "required": [
                "default"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "components": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#components-object",
            "type": "object",
            "properties": {
                "schemas": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/schema"
                    }
                },
                "responses": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/response-or-reference"
                    }
                },
                "parameters": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/parameter-or-reference"
                    }
                },
                "examples": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/example-or-reference"
                    }
                },
                "requestBodies": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/request-body-or-reference"
                    }
                },
                "headers": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/header-or-reference"
                    }
                },
                "securitySchemes": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/security-scheme-or-reference"
                    }
                },
                "links": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/link-or-reference"
                    }
                },
                "callbacks": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/callbacks-or-reference"
                    }
                },
                "pathItems": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/path-item-or-reference"
                    }
                }
            },
            "patternProperties": {
                "^(schemas|responses|parameters|examples|requestBodies|headers|securitySchemes|links|callbacks|pathItems)$": {
                    "$comment": "Enumerating all of the property names in the regex above is necessary for unevaluatedProperties to work as expected",
                    "propertyNames": {
                        "pattern": "^[a-zA-Z0-9._-]+$"
                    }
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "paths": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#paths-object",
            "type": "object",
            "patternProperties": {
                "^/": {
                    "$ref": "#/$defs/path-item"
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "path-item": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#path-item-object",
            "type": "object",
            "properties": {
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "servers": {
                    "type": "array",
                    "items": {
                        "$ref": "#/$defs/server"
                    }
                },
                "parameters": {
                    "type": "array",
                    "items": {
                        "$ref": "#/$defs/parameter-or-reference"
                    }
                },
                "get": {
                    "$ref": "#/$defs/operation"
                },
                "put": {
                    "$ref": "#/$defs/operation"
                },
                "post": {
                    "$ref": "#/$defs/operation"
                },
                "delete": {
                    "$ref": "#/$defs/operation"
                },
                "options": {
                    "$ref": "#/$defs/operation"
                },
                "head": {
                    "$ref": "#/$defs/operation"
                },
                "patch": {
                    "$ref": "#/$defs/operation"
                },
                "trace": {
                    "$ref": "#/$defs/operation"
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "path-item-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/path-item"
            }
        },
        "operation": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#operation-object",
            "type": "object",
            "properties": {
                "tags": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "externalDocs": {
                    "$ref": "#/$defs/external-documentation"
                },
                "operationId": {
                    "type": "string"
                },
                "parameters": {
                    "type": "array",
                    "items": {
                        "$ref": "#/$defs/parameter-or-reference"
                    }
                },
                "requestBody": {
                    "$ref": "#/$defs/request-body-or-reference"
                },
                "responses": {
                    "$ref": "#/$defs/responses"
                },
                "callbacks": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/callbacks-or-reference"
                    }
                },
                "deprecated": {
                    "default": false,
                    "type": "boolean"
                },
                "security": {
                    "type": "array",
                    "items": {
                        "$ref": "#/$defs/security-requirement"
                    }
                },
                "servers": {
                    "type": "array",
                    "items": {
                        "$ref": "#/$defs/server"
                    }
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "external-documentation": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#external-documentation-object",
            "type": "object",
            "properties": {
                "description": {
                    "type": "string"
                },
                "url": {
                    "type": "string",
                    "format": "uri-reference"
                }
            },
            "required": [
                "url"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "parameter": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#parameter-object",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "in": {
                    "enum": [
                        "query",
                        "header",
                        "path",
                        "cookie"
                    ]
                },
                "description": {
                    "type": "string"
                },
                "required": {
                    "default": false,
                    "type": "boolean"
                },
                "deprecated": {
                    "default": false,
                    "type": "boolean"
                },
                "schema": {
                    "$ref": "#/$defs/schema"
                },
                "content": {
                    "$ref": "#/$defs/content",
                    "minProperties": 1,
                    "maxProperties": 1
                }
            },
            "required": [
                "name",
                "in"
            ],
            "oneOf": [
                {
                    "required": [
                        "schema"
                    ]
                },
                {
                    "required": [
                        "content"
                    ]
                }
            ],
            "if": {
                "properties": {
                    "in": {
                        "const": "query"
                    }
                },
                "required": [
                    "in"
                ]
            },
            "then": {
                "properties": {
                    "allowEmptyValue": {
                        "default": false,
                        "type": "boolean"
                    }
                }
            },
            "dependentSchemas": {
                "schema": {
                    "properties": {
                        "style": {
                            "type": "string"
                        },
                        "explode": {
                            "type": "boolean"
                        }
                    },
                    "allOf": [
                        {
                            "$ref": "#/$defs/examples"
                        },
                        {
                            "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-path"
                        },
                        {
                            "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-header"
                        },
                        {
                            "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-query"
                        },
                        {
                            "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-cookie"
                        },
                        {
                            "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-form"
                        }
                    ],
                    "$defs": {
                        "styles-for-path": {
                            "if": {
                                "properties": {
                                    "in": {
                                        "const": "path"
                                    }
                                },
                                "required": [
                                    "in"
                                ]
                            },
                            "then": {
                                "properties": {
                                    "name": {
                                        "pattern": "[^/#?]+$"
                                    },
                                    "style": {
                                        "default": "simple",
                                        "enum": [
                                            "matrix",
                                            "label",
                                            "simple"
                                        ]
                                    },
                                    "required": {
                                        "const": true
                                    }
                                },
                                "required": [
                                    "required"
                                ]
                            }
                        },
                        "styles-for-header": {
                            "if": {
                                "properties": {
                                    "in": {
                                        "const": "header"
                                    }
                                },
                                "required": [
                                    "in"
                                ]
                            },
                            "then": {
                                "properties": {
                                    "style": {
                                        "default": "simple",
                                        "const": "simple"
                                    }
                                }
                            }
                        },
                        "styles-for-query": {
                            "if": {
                                "properties": {
                                    "in": {
                                        "const": "query"
                                    }
                                },
                                "required": [
                                    "in"
                                ]
                            },
                            "then": {
                                "properties": {
                                    "style": {
                                        "default": "form",
                                        "enum": [
                                            "form",
                                            "spaceDelimited",
                                            "pipeDelimited",
                                            "deepObject"
                                        ]
                                    },
                                    "allowReserved": {
                                        "default": false,
                                        "type": "boolean"
                                    }
                                }
                            }
                        },
                        "styles-for-cookie": {
                            "if": {
                                "properties": {
                                    "in": {
                                        "const": "cookie"
                                    }
                                },
                                "required": [
                                    "in"
                                ]
                            },
                            "then": {
                                "properties": {
                                    "style": {
                                        "default": "form",
                                        "const": "form"
                                    }
                                }
                            }
                        },
                        "styles-for-form": {
                            "if": {
                                "properties": {
                                    "style": {
                                        "const": "form"
                                    }
                                },
                                "required": [
                                    "style"
                                ]
                            },
                            "then": {
                                "properties": {
                                    "explode": {
                                        "default": true
                                    }
                                }
                            },
                            "else": {
                                "properties": {
                                    "explode": {
                                        "default": false
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "parameter-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/parameter"
            }
        },
        "request-body": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#request-body-object",
            "type": "object",
            "properties": {
                "description": {
                    "type": "string"
                },
                "content": {
                    "$ref": "#/$defs/content"
                },
                "required": {
                    "default": false,
                    "type": "boolean"
                }
            },
            "required": [
                "content"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "request-body-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/request-body"
            }
        },
        "content": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#fixed-fields-10",
            "type": "object",
            "additionalProperties": {
                "$ref": "#/$defs/media-type"
            },
            "propertyNames": {
                "format": "media-range"
            }
        },
        "media-type": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#media-type-object",
            "type": "object",
            "properties": {
                "schema": {
                    "$ref": "#/$defs/schema"
                },
                "encoding": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/encoding"
                    }
                }
            },
            "allOf": [
                {
                    "$ref": "#/$defs/specification-extensions"
                },
                {
                    "$ref": "#/$defs/examples"
                }
            ],
            "unevaluatedProperties": false
        },
        "encoding": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#encoding-object",
            "type": "object",
            "properties": {
                "contentType": {
                    "type": "string",
                    "format": "media-range"
                },
                "headers": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/header-or-reference"
                    }
                },
                "style": {
                    "default": "form",
                    "enum": [
                        "form",
                        "spaceDelimited",
                        "pipeDelimited",
                        "deepObject"
                    ]
                },
                "explode": {
                    "type": "boolean"
                },
                "allowReserved": {
                    "default": false,
                    "type": "boolean"
                }
            },
            "allOf": [
                {
                    "$ref": "#/$defs/specification-extensions"
                },
                {
                    "$ref": "#/$defs/encoding/$defs/explode-default"
                }
            ],
            "unevaluatedProperties": false,
            "$defs": {
                "explode-default": {
                    "if": {
                        "properties": {
                            "style": {
                                "const": "form"
                            }
                        },
                        "required": [
                            "style"
                        ]
                    },
                    "then": {
                        "properties": {
                            "explode": {
                                "default": true
                            }
                        }
                    },
                    "else": {
                        "properties": {
                            "explode": {
                                "default": false
                            }
                        }
                    }
                }
            }
        },
        "responses": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#responses-object",
            "type": "object",
            "properties": {
                "default": {
                    "$ref": "#/$defs/response-or-reference"
                }
            },
            "patternProperties": {
                "^[1-5](?:[0-9]{2}|XX)$": {
                    "$ref": "#/$defs/response-or-reference"
                }
            },
            "minProperties": 1,
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "response": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#response-object",
            "type": "object",
            "properties": {
                "description": {
                    "type": "string"
                },
                "headers": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/header-or-reference"
                    }
                },
                "content": {
                    "$ref": "#/$defs/content"
                },
                "links": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/link-or-reference"
                    }
                }
            },
            "required": [
                "description"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "response-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/response"
            }
        },
        "callbacks": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#callback-object",
            "type": "object",
            "$ref": "#/$defs/specification-extensions",
            "additionalProperties": {
                "$ref": "#/$defs/path-item-or-reference"
            }
        },
        "callbacks-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/callbacks"
            }
        },
        "example": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#example-object",
            "type": "object",
            "properties": {
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "value": true,
                "externalValue": {
                    "type": "string",
                    "format": "uri-reference"
                }
            },
            "not": {
                "required": [
                    "value",
                    "externalValue"
                ]
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "example-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/example"
            }
        },
        "link": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#link-object",
            "type": "object",
            "properties": {
                "operationRef": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "operationId": {
                    "type": "string"
                },
                "parameters": {
                    "$ref": "#/$defs/map-of-strings"
                },
                "requestBody": true,
                "description": {
                    "type": "string"
                },
                "body": {
                    "$ref": "#/$defs/server"
                }
            },
            "oneOf": [
                {
                    "required": [
                        "operationRef"
                    ]
                },
                {
                    "required": [
                        "operationId"
                    ]
                }
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "link-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/link"
            }
        },
        "header": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#header-object",
            "type": "object",
            "properties": {
                "description": {
                    "type": "string"
                },
                "required": {
                    "default": false,
                    "type": "boolean"
                },
                "deprecated": {
                    "default": false,
                    "type": "boolean"
                },
                "schema": {
                    "$ref": "#/$defs/schema"
                },
                "content": {
                    "$ref": "#/$defs/content",
                    "minProperties": 1,
                    "maxProperties": 1
                }
            },
            "oneOf": [
                {
                    "required": [
                        "schema"
                    ]
                },
                {
                    "required": [
                        "content"
                    ]
                }
            ],
            "dependentSchemas": {
                "schema": {
                    "properties": {
                        "style": {
                            "default": "simple",
                            "const": "simple"
                        },
                        "explode": {
                            "default": false,
                            "type": "boolean"
                        }
                    },
                    "$ref": "#/$defs/examples"
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "header-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/header"
            }
        },
        "tag": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#tag-object",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "externalDocs": {
                    "$ref": "#/$defs/external-documentation"
                }
            },
            "required": [
                "name"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "reference": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#reference-object",
            "type": "object",
            "properties": {
                "$ref": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                }
            },
            "unevaluatedProperties": false
        },
        "schema": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#schema-object",
            "$dynamicAnchor": "meta",
            "type": [
                "object",
                "boolean"
            ]
        },
        "security-scheme": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#security-scheme-object",
            "type": "object",
            "properties": {
                "type": {
                    "enum": [
                        "apiKey",
                        "http",
                        "mutualTLS",
                        "oauth2",
                        "openIdConnect"
                    ]
                },
                "description": {
                    "type": "string"
                }
            },
            "required": [
                "type"
            ],
            "allOf": [
                {
                    "$ref": "#/$defs/specification-extensions"
                },
                {
                    "$ref": "#/$defs/security-scheme/$defs/type-apikey"
                },
                {
                    "$ref": "#/$defs/security-scheme/$defs/type-http"
                },
                {
                    "$ref": "#/$defs/security-scheme/$defs/type-http-bearer"
                },
                {
                    "$ref": "#/$defs/security-scheme/$defs/type-oauth2"
                },
                {
                    "$ref": "#/$defs/security-scheme/$defs/type-oidc"
                }
            ],
            "unevaluatedProperties": false,
            "$defs": {
                "type-apikey": {
                    "if": {
                        "properties": {
                            "type": {
                                "const": "apiKey"
                            }
                        },
                        "required": [
                            "type"
                        ]
                    },
                    "then": {
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "in": {
                                "enum": [
                                    "query",
                                    "header",
                                    "cookie"
                                ]
                            }
                        },
                        "required": [
                            "name",
                            "in"
                        ]
                    }
                },
                "type-http": {
                    "if": {
                        "properties": {
                            "type": {
                                "const": "http"
                            }
                        },
                        "required": [
                            "type"
                        ]
                    },
                    "then": {
                        "properties": {
                            "scheme": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "scheme"
                        ]
                    }
                },
                "type-http-bearer": {
                    "if": {
                        "properties": {
                            "type": {
                                "const": "http"
                            },
                            "scheme": {
                                "type": "string",
                                "pattern": "^[Bb][Ee][Aa][Rr][Ee][Rr]$"
                            }
                        },
                        "required": [
                            "type",
                            "scheme"
                        ]
                    },
                    "then": {
                        "properties": {
                            "bearerFormat": {
                                "type": "string"
                            }
                        }
                    }
                },
                "type-oauth2": {
                    "if": {
                        "properties": {
                            "type": {
                                "const": "oauth2"
                            }
                        },
                        "required": [
                            "type"
                        ]
                    },
                    "then": {
                        "properties": {
                            "flows": {
                                "$ref": "#/$defs/oauth-flows"
                            }
                        },
                        "required": [
                            "flows"
                        ]
                    }
                },
                "type-oidc": {
                    "if": {
                        "properties": {
                            "type": {
                                "const": "openIdConnect"
                            }
                        },
                        "required": [
                            "type"
                        ]
                    },
                    "then": {
                        "properties": {
                            "openIdConnectUrl": {
                                "type": "string",
                                "format": "uri-reference"
                            }
                        },
                        "required": [
                            "openIdConnectUrl"
                        ]
                    }
                }
            }
        },
        "security-scheme-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/security-scheme"
            }
        },
        "oauth-flows": {
            "type": "object",
            "properties": {
                "implicit": {
                    "$ref": "#/$defs/oauth-flows/$defs/implicit"
                },
                "password": {
                    "$ref": "#/$defs/oauth-flows/$defs/password"
                },
                "clientCredentials": {
                    "$ref": "#/$defs/oauth-flows/$defs/client-credentials"
                },
                "authorizationCode": {
                    "$ref": "#/$defs/oauth-flows/$defs/authorization-code"
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false,
            "$defs": {
                "implicit": {
                    "type": "object",
                    "properties": {
                        "authorizationUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "refreshUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "scopes": {
                            "$ref": "#/$defs/map-of-strings"
                        }
                    },
                    "required": [
                        "authorizationUrl",
                        "scopes"
                    ],
                    "$ref": "#/$defs/specification-extensions",
                    "unevaluatedProperties": false
                },
                "password": {
                    "type": "object",
                    "properties": {
                        "tokenUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "refreshUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "scopes": {
                            "$ref": "#/$defs/map-of-strings"
                        }
                    },
                    "required": [
                        "tokenUrl",
                        "scopes"
                    ],
                    "$ref": "#/$defs/specification-extensions",
                    "unevaluatedProperties": false
                },
                "client-credentials": {
                    "type": "object",
                    "properties": {
                        "tokenUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "refreshUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "scopes": {
                            "$ref": "#/$defs/map-of-strings"
                        }
                    },
                    "required": [
                        "tokenUrl",
                        "scopes"
                    ],
                    "$ref": "#/$defs/specification-extensions",
                    "unevaluatedProperties": false
                },
                "authorization-code": {
                    "type": "object",
                    "properties": {
                        "authorizationUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "tokenUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "refreshUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "scopes": {
                            "$ref": "#/$defs/map-of-strings"
                        }
                    },
                    "required": [
                        "authorizationUrl",
                        "tokenUrl",
                        "scopes"
                    ],
                    "$ref": "#/$defs/specification-extensions",
                    "unevaluatedProperties": false
                }
            }
        },
        "security-requirement": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#security-requirement-object",
            "type": "object",
            "additionalProperties": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            }
        },
        "specification-extensions": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#specification-extensions",
            "patternProperties": {
                "^x-": true
            }
        },
        "examples": {
            "properties": {
                "example": true,
                "examples": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/example-or-reference"
                    }
                }
            }
        },
        "map-of-strings": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            }
        }
    }
};
;
 //# sourceMappingURL=schema.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/schemas/v3.2/schema.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>schema_default
]);
var schema_default = {
    "$id": "https://spec.openapis.org/oas/3.2/schema/2025-09-17",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "description": "The description of OpenAPI v3.2.x Documents without Schema Object validation",
    "type": "object",
    "properties": {
        "openapi": {
            "type": "string",
            "pattern": "^3\\.2\\.\\d+(-.+)?$"
        },
        "$self": {
            "type": "string",
            "format": "uri-reference",
            "$comment": "MUST NOT contain a fragment",
            "pattern": "^[^#]*$"
        },
        "info": {
            "$ref": "#/$defs/info"
        },
        "jsonSchemaDialect": {
            "type": "string",
            "format": "uri-reference",
            "default": "https://spec.openapis.org/oas/3.2/dialect/2025-09-17"
        },
        "servers": {
            "type": "array",
            "items": {
                "$ref": "#/$defs/server"
            },
            "default": [
                {
                    "url": "/"
                }
            ]
        },
        "paths": {
            "$ref": "#/$defs/paths"
        },
        "webhooks": {
            "type": "object",
            "additionalProperties": {
                "$ref": "#/$defs/path-item"
            }
        },
        "components": {
            "$ref": "#/$defs/components"
        },
        "security": {
            "type": "array",
            "items": {
                "$ref": "#/$defs/security-requirement"
            }
        },
        "tags": {
            "type": "array",
            "items": {
                "$ref": "#/$defs/tag"
            }
        },
        "externalDocs": {
            "$ref": "#/$defs/external-documentation"
        }
    },
    "required": [
        "openapi",
        "info"
    ],
    "anyOf": [
        {
            "required": [
                "paths"
            ]
        },
        {
            "required": [
                "components"
            ]
        },
        {
            "required": [
                "webhooks"
            ]
        }
    ],
    "$ref": "#/$defs/specification-extensions",
    "unevaluatedProperties": false,
    "$defs": {
        "info": {
            "$comment": "https://spec.openapis.org/oas/v3.2#info-object",
            "type": "object",
            "properties": {
                "title": {
                    "type": "string"
                },
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "termsOfService": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "contact": {
                    "$ref": "#/$defs/contact"
                },
                "license": {
                    "$ref": "#/$defs/license"
                },
                "version": {
                    "type": "string"
                }
            },
            "required": [
                "title",
                "version"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "contact": {
            "$comment": "https://spec.openapis.org/oas/v3.2#contact-object",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "url": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "email": {
                    "type": "string",
                    "format": "email"
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "license": {
            "$comment": "https://spec.openapis.org/oas/v3.2#license-object",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "identifier": {
                    "type": "string"
                },
                "url": {
                    "type": "string",
                    "format": "uri-reference"
                }
            },
            "required": [
                "name"
            ],
            "dependentSchemas": {
                "identifier": {
                    "not": {
                        "required": [
                            "url"
                        ]
                    }
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "server": {
            "$comment": "https://spec.openapis.org/oas/v3.2#server-object",
            "type": "object",
            "properties": {
                "url": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "variables": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/server-variable"
                    }
                }
            },
            "required": [
                "url"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "server-variable": {
            "$comment": "https://spec.openapis.org/oas/v3.2#server-variable-object",
            "type": "object",
            "properties": {
                "enum": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    },
                    "minItems": 1
                },
                "default": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                }
            },
            "required": [
                "default"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "components": {
            "$comment": "https://spec.openapis.org/oas/v3.2#components-object",
            "type": "object",
            "properties": {
                "schemas": {
                    "type": "object",
                    "additionalProperties": {
                        "$dynamicRef": "#meta"
                    }
                },
                "responses": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/response-or-reference"
                    }
                },
                "parameters": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/parameter-or-reference"
                    }
                },
                "examples": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/example-or-reference"
                    }
                },
                "requestBodies": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/request-body-or-reference"
                    }
                },
                "headers": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/header-or-reference"
                    }
                },
                "securitySchemes": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/security-scheme-or-reference"
                    }
                },
                "links": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/link-or-reference"
                    }
                },
                "callbacks": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/callbacks-or-reference"
                    }
                },
                "pathItems": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/path-item"
                    }
                },
                "mediaTypes": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/media-type-or-reference"
                    }
                }
            },
            "patternProperties": {
                "^(?:schemas|responses|parameters|examples|requestBodies|headers|securitySchemes|links|callbacks|pathItems|mediaTypes)$": {
                    "$comment": "Enumerating all of the property names in the regex above is necessary for unevaluatedProperties to work as expected",
                    "propertyNames": {
                        "pattern": "^[a-zA-Z0-9._-]+$"
                    }
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "paths": {
            "$comment": "https://spec.openapis.org/oas/v3.2#paths-object",
            "type": "object",
            "patternProperties": {
                "^/": {
                    "$ref": "#/$defs/path-item"
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "path-item": {
            "$comment": "https://spec.openapis.org/oas/v3.2#path-item-object",
            "type": "object",
            "properties": {
                "$ref": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "servers": {
                    "type": "array",
                    "items": {
                        "$ref": "#/$defs/server"
                    }
                },
                "parameters": {
                    "$ref": "#/$defs/parameters"
                },
                "additionalOperations": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/operation"
                    },
                    "propertyNames": {
                        "$comment": 'RFC9110 restricts methods to "1*tchar" in ABNF',
                        "pattern": "^[a-zA-Z0-9!#$%&'*+.^_`|~-]+$",
                        "not": {
                            "enum": [
                                "GET",
                                "PUT",
                                "POST",
                                "DELETE",
                                "OPTIONS",
                                "HEAD",
                                "PATCH",
                                "TRACE",
                                "QUERY"
                            ]
                        }
                    }
                },
                "get": {
                    "$ref": "#/$defs/operation"
                },
                "put": {
                    "$ref": "#/$defs/operation"
                },
                "post": {
                    "$ref": "#/$defs/operation"
                },
                "delete": {
                    "$ref": "#/$defs/operation"
                },
                "options": {
                    "$ref": "#/$defs/operation"
                },
                "head": {
                    "$ref": "#/$defs/operation"
                },
                "patch": {
                    "$ref": "#/$defs/operation"
                },
                "trace": {
                    "$ref": "#/$defs/operation"
                },
                "query": {
                    "$ref": "#/$defs/operation"
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "operation": {
            "$comment": "https://spec.openapis.org/oas/v3.2#operation-object",
            "type": "object",
            "properties": {
                "tags": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "externalDocs": {
                    "$ref": "#/$defs/external-documentation"
                },
                "operationId": {
                    "type": "string"
                },
                "parameters": {
                    "$ref": "#/$defs/parameters"
                },
                "requestBody": {
                    "$ref": "#/$defs/request-body-or-reference"
                },
                "responses": {
                    "$ref": "#/$defs/responses"
                },
                "callbacks": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/callbacks-or-reference"
                    }
                },
                "deprecated": {
                    "default": false,
                    "type": "boolean"
                },
                "security": {
                    "type": "array",
                    "items": {
                        "$ref": "#/$defs/security-requirement"
                    }
                },
                "servers": {
                    "type": "array",
                    "items": {
                        "$ref": "#/$defs/server"
                    }
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "external-documentation": {
            "$comment": "https://spec.openapis.org/oas/v3.2#external-documentation-object",
            "type": "object",
            "properties": {
                "description": {
                    "type": "string"
                },
                "url": {
                    "type": "string",
                    "format": "uri-reference"
                }
            },
            "required": [
                "url"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "parameters": {
            "type": "array",
            "items": {
                "$ref": "#/$defs/parameter-or-reference"
            },
            "not": {
                "allOf": [
                    {
                        "contains": {
                            "type": "object",
                            "properties": {
                                "in": {
                                    "const": "query"
                                }
                            },
                            "required": [
                                "in"
                            ]
                        }
                    },
                    {
                        "contains": {
                            "type": "object",
                            "properties": {
                                "in": {
                                    "const": "querystring"
                                }
                            },
                            "required": [
                                "in"
                            ]
                        }
                    }
                ]
            },
            "contains": {
                "type": "object",
                "properties": {
                    "in": {
                        "const": "querystring"
                    }
                },
                "required": [
                    "in"
                ]
            },
            "minContains": 0,
            "maxContains": 1
        },
        "parameter": {
            "$comment": "https://spec.openapis.org/oas/v3.2#parameter-object",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "in": {
                    "enum": [
                        "query",
                        "querystring",
                        "header",
                        "path",
                        "cookie"
                    ]
                },
                "description": {
                    "type": "string"
                },
                "required": {
                    "default": false,
                    "type": "boolean"
                },
                "deprecated": {
                    "default": false,
                    "type": "boolean"
                },
                "schema": {
                    "$dynamicRef": "#meta"
                },
                "content": {
                    "$ref": "#/$defs/content",
                    "minProperties": 1,
                    "maxProperties": 1
                }
            },
            "required": [
                "name",
                "in"
            ],
            "oneOf": [
                {
                    "required": [
                        "schema"
                    ]
                },
                {
                    "required": [
                        "content"
                    ]
                }
            ],
            "allOf": [
                {
                    "$ref": "#/$defs/examples"
                },
                {
                    "$ref": "#/$defs/specification-extensions"
                },
                {
                    "if": {
                        "properties": {
                            "in": {
                                "const": "query"
                            }
                        }
                    },
                    "then": {
                        "properties": {
                            "allowEmptyValue": {
                                "default": false,
                                "type": "boolean"
                            }
                        }
                    }
                },
                {
                    "if": {
                        "properties": {
                            "in": {
                                "const": "querystring"
                            }
                        }
                    },
                    "then": {
                        "required": [
                            "content"
                        ]
                    }
                }
            ],
            "dependentSchemas": {
                "schema": {
                    "properties": {
                        "style": {
                            "type": "string"
                        },
                        "explode": {
                            "type": "boolean"
                        },
                        "allowReserved": {
                            "default": false,
                            "type": "boolean"
                        }
                    },
                    "allOf": [
                        {
                            "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-path"
                        },
                        {
                            "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-header"
                        },
                        {
                            "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-query"
                        },
                        {
                            "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-cookie"
                        },
                        {
                            "$ref": "#/$defs/styles-for-form"
                        }
                    ],
                    "$defs": {
                        "styles-for-path": {
                            "if": {
                                "properties": {
                                    "in": {
                                        "const": "path"
                                    }
                                }
                            },
                            "then": {
                                "properties": {
                                    "style": {
                                        "default": "simple",
                                        "enum": [
                                            "matrix",
                                            "label",
                                            "simple"
                                        ]
                                    },
                                    "required": {
                                        "const": true
                                    }
                                },
                                "required": [
                                    "required"
                                ]
                            }
                        },
                        "styles-for-header": {
                            "if": {
                                "properties": {
                                    "in": {
                                        "const": "header"
                                    }
                                }
                            },
                            "then": {
                                "properties": {
                                    "style": {
                                        "default": "simple",
                                        "const": "simple"
                                    }
                                }
                            }
                        },
                        "styles-for-query": {
                            "if": {
                                "properties": {
                                    "in": {
                                        "const": "query"
                                    }
                                }
                            },
                            "then": {
                                "properties": {
                                    "style": {
                                        "default": "form",
                                        "enum": [
                                            "form",
                                            "spaceDelimited",
                                            "pipeDelimited",
                                            "deepObject"
                                        ]
                                    }
                                }
                            }
                        },
                        "styles-for-cookie": {
                            "if": {
                                "properties": {
                                    "in": {
                                        "const": "cookie"
                                    }
                                }
                            },
                            "then": {
                                "properties": {
                                    "style": {
                                        "default": "form",
                                        "enum": [
                                            "form",
                                            "cookie"
                                        ]
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "unevaluatedProperties": false
        },
        "parameter-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/parameter"
            }
        },
        "request-body": {
            "$comment": "https://spec.openapis.org/oas/v3.2#request-body-object",
            "type": "object",
            "properties": {
                "description": {
                    "type": "string"
                },
                "content": {
                    "$ref": "#/$defs/content"
                },
                "required": {
                    "default": false,
                    "type": "boolean"
                }
            },
            "required": [
                "content"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "request-body-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/request-body"
            }
        },
        "content": {
            "$comment": "https://spec.openapis.org/oas/v3.2#fixed-fields-10",
            "type": "object",
            "additionalProperties": {
                "$ref": "#/$defs/media-type-or-reference"
            },
            "propertyNames": {
                "format": "media-range"
            }
        },
        "media-type": {
            "$comment": "https://spec.openapis.org/oas/v3.2#media-type-object",
            "type": "object",
            "properties": {
                "description": {
                    "type": "string"
                },
                "schema": {
                    "$dynamicRef": "#meta"
                },
                "itemSchema": {
                    "$dynamicRef": "#meta"
                },
                "encoding": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/encoding"
                    }
                },
                "prefixEncoding": {
                    "type": "array",
                    "items": {
                        "$ref": "#/$defs/encoding"
                    }
                },
                "itemEncoding": {
                    "$ref": "#/$defs/encoding"
                }
            },
            "dependentSchemas": {
                "encoding": {
                    "properties": {
                        "prefixEncoding": false,
                        "itemEncoding": false
                    }
                }
            },
            "allOf": [
                {
                    "$ref": "#/$defs/examples"
                },
                {
                    "$ref": "#/$defs/specification-extensions"
                }
            ],
            "unevaluatedProperties": false
        },
        "media-type-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/media-type"
            }
        },
        "encoding": {
            "$comment": "https://spec.openapis.org/oas/v3.2#encoding-object",
            "type": "object",
            "properties": {
                "contentType": {
                    "type": "string",
                    "format": "media-range"
                },
                "headers": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/header-or-reference"
                    }
                },
                "style": {
                    "enum": [
                        "form",
                        "spaceDelimited",
                        "pipeDelimited",
                        "deepObject"
                    ]
                },
                "explode": {
                    "type": "boolean"
                },
                "allowReserved": {
                    "type": "boolean"
                },
                "encoding": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/encoding"
                    }
                },
                "prefixEncoding": {
                    "type": "array",
                    "items": {
                        "$ref": "#/$defs/encoding"
                    }
                },
                "itemEncoding": {
                    "$ref": "#/$defs/encoding"
                }
            },
            "dependentSchemas": {
                "encoding": {
                    "properties": {
                        "prefixEncoding": false,
                        "itemEncoding": false
                    }
                },
                "style": {
                    "properties": {
                        "allowReserved": {
                            "default": false
                        }
                    }
                },
                "explode": {
                    "properties": {
                        "style": {
                            "default": "form"
                        },
                        "allowReserved": {
                            "default": false
                        }
                    }
                },
                "allowReserved": {
                    "properties": {
                        "style": {
                            "default": "form"
                        }
                    }
                }
            },
            "allOf": [
                {
                    "$ref": "#/$defs/specification-extensions"
                },
                {
                    "$ref": "#/$defs/styles-for-form"
                }
            ],
            "unevaluatedProperties": false
        },
        "responses": {
            "$comment": "https://spec.openapis.org/oas/v3.2#responses-object",
            "type": "object",
            "properties": {
                "default": {
                    "$ref": "#/$defs/response-or-reference"
                }
            },
            "patternProperties": {
                "^[1-5](?:[0-9]{2}|XX)$": {
                    "$ref": "#/$defs/response-or-reference"
                }
            },
            "minProperties": 1,
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false,
            "if": {
                "$comment": "either default, or at least one response code property must exist",
                "patternProperties": {
                    "^[1-5](?:[0-9]{2}|XX)$": false
                }
            },
            "then": {
                "required": [
                    "default"
                ]
            }
        },
        "response": {
            "$comment": "https://spec.openapis.org/oas/v3.2#response-object",
            "type": "object",
            "properties": {
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "headers": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/header-or-reference"
                    }
                },
                "content": {
                    "$ref": "#/$defs/content"
                },
                "links": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/link-or-reference"
                    }
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "response-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/response"
            }
        },
        "callbacks": {
            "$comment": "https://spec.openapis.org/oas/v3.2#callback-object",
            "type": "object",
            "$ref": "#/$defs/specification-extensions",
            "additionalProperties": {
                "$ref": "#/$defs/path-item"
            }
        },
        "callbacks-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/callbacks"
            }
        },
        "example": {
            "$comment": "https://spec.openapis.org/oas/v3.2#example-object",
            "type": "object",
            "properties": {
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "dataValue": true,
                "serializedValue": {
                    "type": "string"
                },
                "value": true,
                "externalValue": {
                    "type": "string",
                    "format": "uri-reference"
                }
            },
            "allOf": [
                {
                    "not": {
                        "required": [
                            "value",
                            "externalValue"
                        ]
                    }
                },
                {
                    "not": {
                        "required": [
                            "value",
                            "dataValue"
                        ]
                    }
                },
                {
                    "not": {
                        "required": [
                            "value",
                            "serializedValue"
                        ]
                    }
                },
                {
                    "not": {
                        "required": [
                            "serializedValue",
                            "externalValue"
                        ]
                    }
                }
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "example-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/example"
            }
        },
        "link": {
            "$comment": "https://spec.openapis.org/oas/v3.2#link-object",
            "type": "object",
            "properties": {
                "operationRef": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "operationId": {
                    "type": "string"
                },
                "parameters": {
                    "$ref": "#/$defs/map-of-strings"
                },
                "requestBody": true,
                "description": {
                    "type": "string"
                },
                "server": {
                    "$ref": "#/$defs/server"
                }
            },
            "oneOf": [
                {
                    "required": [
                        "operationRef"
                    ]
                },
                {
                    "required": [
                        "operationId"
                    ]
                }
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "link-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/link"
            }
        },
        "header": {
            "$comment": "https://spec.openapis.org/oas/v3.2#header-object",
            "type": "object",
            "properties": {
                "description": {
                    "type": "string"
                },
                "required": {
                    "default": false,
                    "type": "boolean"
                },
                "deprecated": {
                    "default": false,
                    "type": "boolean"
                },
                "schema": {
                    "$dynamicRef": "#meta"
                },
                "content": {
                    "$ref": "#/$defs/content",
                    "minProperties": 1,
                    "maxProperties": 1
                }
            },
            "oneOf": [
                {
                    "required": [
                        "schema"
                    ]
                },
                {
                    "required": [
                        "content"
                    ]
                }
            ],
            "dependentSchemas": {
                "schema": {
                    "properties": {
                        "style": {
                            "default": "simple",
                            "const": "simple"
                        },
                        "explode": {
                            "default": false,
                            "type": "boolean"
                        },
                        "allowReserved": {
                            "default": false,
                            "type": "boolean"
                        }
                    }
                }
            },
            "allOf": [
                {
                    "$ref": "#/$defs/examples"
                },
                {
                    "$ref": "#/$defs/specification-extensions"
                }
            ],
            "unevaluatedProperties": false
        },
        "header-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/header"
            }
        },
        "tag": {
            "$comment": "https://spec.openapis.org/oas/v3.2#tag-object",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "externalDocs": {
                    "$ref": "#/$defs/external-documentation"
                },
                "parent": {
                    "type": "string"
                },
                "kind": {
                    "type": "string"
                }
            },
            "required": [
                "name"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "reference": {
            "$comment": "https://spec.openapis.org/oas/v3.2#reference-object",
            "type": "object",
            "properties": {
                "$ref": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                }
            }
        },
        "schema": {
            "$comment": "https://spec.openapis.org/oas/v3.2#schema-object",
            "$dynamicAnchor": "meta",
            "type": [
                "object",
                "boolean"
            ]
        },
        "security-scheme": {
            "$comment": "https://spec.openapis.org/oas/v3.2#security-scheme-object",
            "type": "object",
            "properties": {
                "type": {
                    "enum": [
                        "apiKey",
                        "http",
                        "mutualTLS",
                        "oauth2",
                        "openIdConnect"
                    ]
                },
                "description": {
                    "type": "string"
                },
                "deprecated": {
                    "default": false,
                    "type": "boolean"
                }
            },
            "required": [
                "type"
            ],
            "allOf": [
                {
                    "$ref": "#/$defs/specification-extensions"
                },
                {
                    "$ref": "#/$defs/security-scheme/$defs/type-apikey"
                },
                {
                    "$ref": "#/$defs/security-scheme/$defs/type-http"
                },
                {
                    "$ref": "#/$defs/security-scheme/$defs/type-http-bearer"
                },
                {
                    "$ref": "#/$defs/security-scheme/$defs/type-oauth2"
                },
                {
                    "$ref": "#/$defs/security-scheme/$defs/type-oidc"
                }
            ],
            "unevaluatedProperties": false,
            "$defs": {
                "type-apikey": {
                    "if": {
                        "properties": {
                            "type": {
                                "const": "apiKey"
                            }
                        }
                    },
                    "then": {
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "in": {
                                "enum": [
                                    "query",
                                    "header",
                                    "cookie"
                                ]
                            }
                        },
                        "required": [
                            "name",
                            "in"
                        ]
                    }
                },
                "type-http": {
                    "if": {
                        "properties": {
                            "type": {
                                "const": "http"
                            }
                        }
                    },
                    "then": {
                        "properties": {
                            "scheme": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "scheme"
                        ]
                    }
                },
                "type-http-bearer": {
                    "if": {
                        "properties": {
                            "type": {
                                "const": "http"
                            },
                            "scheme": {
                                "type": "string",
                                "pattern": "^[Bb][Ee][Aa][Rr][Ee][Rr]$"
                            }
                        },
                        "required": [
                            "type",
                            "scheme"
                        ]
                    },
                    "then": {
                        "properties": {
                            "bearerFormat": {
                                "type": "string"
                            }
                        }
                    }
                },
                "type-oauth2": {
                    "if": {
                        "properties": {
                            "type": {
                                "const": "oauth2"
                            }
                        }
                    },
                    "then": {
                        "properties": {
                            "flows": {
                                "$ref": "#/$defs/oauth-flows"
                            },
                            "oauth2MetadataUrl": {
                                "type": "string",
                                "format": "uri-reference"
                            }
                        },
                        "required": [
                            "flows"
                        ]
                    }
                },
                "type-oidc": {
                    "if": {
                        "properties": {
                            "type": {
                                "const": "openIdConnect"
                            }
                        }
                    },
                    "then": {
                        "properties": {
                            "openIdConnectUrl": {
                                "type": "string",
                                "format": "uri-reference"
                            }
                        },
                        "required": [
                            "openIdConnectUrl"
                        ]
                    }
                }
            }
        },
        "security-scheme-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/security-scheme"
            }
        },
        "oauth-flows": {
            "type": "object",
            "properties": {
                "implicit": {
                    "$ref": "#/$defs/oauth-flows/$defs/implicit"
                },
                "password": {
                    "$ref": "#/$defs/oauth-flows/$defs/password"
                },
                "clientCredentials": {
                    "$ref": "#/$defs/oauth-flows/$defs/client-credentials"
                },
                "authorizationCode": {
                    "$ref": "#/$defs/oauth-flows/$defs/authorization-code"
                },
                "deviceAuthorization": {
                    "$ref": "#/$defs/oauth-flows/$defs/device-authorization"
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false,
            "$defs": {
                "implicit": {
                    "type": "object",
                    "properties": {
                        "authorizationUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "refreshUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "scopes": {
                            "$ref": "#/$defs/map-of-strings"
                        }
                    },
                    "required": [
                        "authorizationUrl",
                        "scopes"
                    ],
                    "$ref": "#/$defs/specification-extensions",
                    "unevaluatedProperties": false
                },
                "password": {
                    "type": "object",
                    "properties": {
                        "tokenUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "refreshUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "scopes": {
                            "$ref": "#/$defs/map-of-strings"
                        }
                    },
                    "required": [
                        "tokenUrl",
                        "scopes"
                    ],
                    "$ref": "#/$defs/specification-extensions",
                    "unevaluatedProperties": false
                },
                "client-credentials": {
                    "type": "object",
                    "properties": {
                        "tokenUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "refreshUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "scopes": {
                            "$ref": "#/$defs/map-of-strings"
                        }
                    },
                    "required": [
                        "tokenUrl",
                        "scopes"
                    ],
                    "$ref": "#/$defs/specification-extensions",
                    "unevaluatedProperties": false
                },
                "authorization-code": {
                    "type": "object",
                    "properties": {
                        "authorizationUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "tokenUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "refreshUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "scopes": {
                            "$ref": "#/$defs/map-of-strings"
                        }
                    },
                    "required": [
                        "authorizationUrl",
                        "tokenUrl",
                        "scopes"
                    ],
                    "$ref": "#/$defs/specification-extensions",
                    "unevaluatedProperties": false
                },
                "device-authorization": {
                    "type": "object",
                    "properties": {
                        "deviceAuthorizationUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "tokenUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "refreshUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "scopes": {
                            "$ref": "#/$defs/map-of-strings"
                        }
                    },
                    "required": [
                        "deviceAuthorizationUrl",
                        "tokenUrl",
                        "scopes"
                    ],
                    "$ref": "#/$defs/specification-extensions",
                    "unevaluatedProperties": false
                }
            }
        },
        "security-requirement": {
            "$comment": "https://spec.openapis.org/oas/v3.2#security-requirement-object",
            "type": "object",
            "additionalProperties": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            }
        },
        "specification-extensions": {
            "$comment": "https://spec.openapis.org/oas/v3.2#specification-extensions",
            "patternProperties": {
                "^x-": true
            }
        },
        "examples": {
            "properties": {
                "example": true,
                "examples": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/example-or-reference"
                    }
                }
            },
            "not": {
                "required": [
                    "example",
                    "examples"
                ]
            }
        },
        "map-of-strings": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            }
        },
        "styles-for-form": {
            "if": {
                "properties": {
                    "style": {
                        "const": "form"
                    }
                },
                "required": [
                    "style"
                ]
            },
            "then": {
                "properties": {
                    "explode": {
                        "default": true
                    }
                }
            },
            "else": {
                "properties": {
                    "explode": {
                        "default": false
                    }
                }
            }
        }
    }
};
;
 //# sourceMappingURL=schema.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/configuration/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ERRORS",
    ()=>ERRORS,
    "OpenApiSpecifications",
    ()=>OpenApiSpecifications,
    "OpenApiVersions",
    ()=>OpenApiVersions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$schemas$2f$v2$2e$0$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/schemas/v2.0/schema.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$schemas$2f$v3$2e$0$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/schemas/v3.0/schema.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$schemas$2f$v3$2e$1$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/schemas/v3.1/schema.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$schemas$2f$v3$2e$2$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/schemas/v3.2/schema.js [app-rsc] (ecmascript)");
;
;
;
;
const OpenApiSpecifications = {
    "2.0": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$schemas$2f$v2$2e$0$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "3.0": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$schemas$2f$v3$2e$0$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "3.1": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$schemas$2f$v3$2e$1$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "3.2": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$schemas$2f$v3$2e$2$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
};
const OpenApiVersions = Object.keys(OpenApiSpecifications);
const ERRORS = {
    EMPTY_OR_INVALID: "Can't find JSON, YAML or filename in data.",
    // URI_MUST_BE_STRING: 'uri parameter or $id attribute must be a string',
    OPENAPI_VERSION_NOT_SUPPORTED: "Can't find supported Swagger/OpenAPI version in the provided document, version must be a string.",
    INVALID_REFERENCE: "Can't resolve reference: %s",
    EXTERNAL_REFERENCE_NOT_FOUND: "Can't resolve external reference: %s",
    FILE_DOES_NOT_EXIST: "File does not exist: %s",
    NO_CONTENT: "No content found"
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/is-object.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
const isObject = (obj)=>typeof obj === "object" && !Array.isArray(obj) && obj !== null;
;
 //# sourceMappingURL=is-object.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/details.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "details",
    ()=>details
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/configuration/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/is-object.js [app-rsc] (ecmascript)");
;
;
function details(specification) {
    if (specification === null) {
        return {
            version: void 0,
            specificationType: void 0,
            specificationVersion: void 0
        };
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(specification)) {
        for (const version of new Set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OpenApiVersions"])){
            const specificationType = version === "2.0" ? "swagger" : "openapi";
            const value = specification[specificationType];
            if (typeof value === "string" && value.startsWith(version)) {
                return {
                    version,
                    specificationType,
                    specificationVersion: value
                };
            }
        }
    }
    return {
        version: void 0,
        specificationType: void 0,
        specificationVersion: void 0
    };
}
;
 //# sourceMappingURL=details.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/get-entrypoint.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEntrypoint",
    ()=>getEntrypoint
]);
function getEntrypoint(filesystem) {
    return filesystem?.find((file)=>file.isEntrypoint);
}
;
 //# sourceMappingURL=get-entrypoint.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/traverse.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "traverse",
    ()=>traverse
]);
function traverse(content, transform, path = []) {
    const result = {};
    for (const [key, value] of Object.entries(content)){
        const currentPath = [
            ...path,
            key
        ];
        if (Array.isArray(value)) {
            result[key] = value.map((item, index)=>{
                if (typeof item === "object" && !Array.isArray(item) && item !== null) {
                    return traverse(item, transform, [
                        ...currentPath,
                        index.toString()
                    ]);
                }
                return item;
            });
            continue;
        }
        if (typeof value === "object" && value !== null) {
            result[key] = traverse(value, transform, currentPath);
            continue;
        }
        result[key] = value;
    }
    return transform(result, path);
}
;
 //# sourceMappingURL=traverse.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/get-list-of-references.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getListOfReferences",
    ()=>getListOfReferences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$traverse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/traverse.js [app-rsc] (ecmascript)");
;
function getListOfReferences(specification) {
    const references = [];
    if (!specification || typeof specification !== "object") {
        return references;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$traverse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverse"])(specification, (value)=>{
        if (value.$ref && typeof value.$ref === "string" && !value.$ref.startsWith("#")) {
            references.push(value.$ref.split("#")[0]);
        }
        return value;
    });
    return [
        ...new Set(references)
    ];
}
;
 //# sourceMappingURL=get-list-of-references.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/is-filesystem.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isFilesystem",
    ()=>isFilesystem
]);
function isFilesystem(value) {
    return typeof value !== "undefined" && Array.isArray(value) && value.length > 0 && value.some((file)=>file.isEntrypoint === true);
}
;
 //# sourceMappingURL=is-filesystem.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/normalize.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalize",
    ()=>normalize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yaml$40$2$2e$8$2e$2$2f$node_modules$2f$yaml$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/yaml@2.8.2/node_modules/yaml/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/is-filesystem.js [app-rsc] (ecmascript)");
;
;
function normalize(content) {
    if (content === null) {
        return void 0;
    }
    if (typeof content === "string") {
        if (content.trim() === "") {
            return void 0;
        }
        try {
            return JSON.parse(content);
        } catch  {
            const hasColon = /^[^:]+:/.test(content);
            const isJson = content.slice(0, 50).trimStart().startsWith("{");
            if (!hasColon || isJson) {
                return void 0;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yaml$40$2$2e$8$2e$2$2f$node_modules$2f$yaml$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(content, {
                maxAliasCount: 1e4,
                merge: true
            });
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFilesystem"])(content)) {
        return content;
    }
    return content;
}
;
 //# sourceMappingURL=normalize.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/make-filesystem.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeFilesystem",
    ()=>makeFilesystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$list$2d$of$2d$references$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/get-list-of-references.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/is-filesystem.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$normalize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/normalize.js [app-rsc] (ecmascript)");
;
;
;
function makeFilesystem(value, overwrites = {}) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFilesystem"])(value)) {
        return value;
    }
    const specification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$normalize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalize"])(value);
    return [
        {
            isEntrypoint: true,
            specification,
            filename: null,
            dir: "./",
            references: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$list$2d$of$2d$references$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getListOfReferences"])(specification),
            ...overwrites
        }
    ];
}
;
 //# sourceMappingURL=make-filesystem.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/unescape-json-pointer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unescapeJsonPointer",
    ()=>unescapeJsonPointer
]);
function unescapeJsonPointer(uri) {
    return decodeURI(uri.replace(/~1/g, "/").replace(/~0/g, "~"));
}
;
 //# sourceMappingURL=unescape-json-pointer.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/get-segments-from-path.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSegmentsFromPath",
    ()=>getSegmentsFromPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$unescape$2d$json$2d$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/unescape-json-pointer.js [app-rsc] (ecmascript)");
;
function getSegmentsFromPath(path) {
    return(// /paths/~1test
    path.split("/").slice(1).map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$unescape$2d$json$2d$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unescapeJsonPointer"]));
}
;
 //# sourceMappingURL=get-segments-from-path.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/resolve-references.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveReferences",
    ()=>resolveReferences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/configuration/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$entrypoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/get-entrypoint.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$segments$2d$from$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/get-segments-from-path.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/is-object.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$make$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/make-filesystem.js [app-rsc] (ecmascript)");
;
;
;
;
;
function resolveReferences(input, options, file, errors = []) {
    const clonedInput = structuredClone(input);
    const filesystem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$make$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeFilesystem"])(clonedInput);
    const entrypoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$entrypoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEntrypoint"])(filesystem);
    const finalInput = file?.specification ?? entrypoint.specification;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(finalInput)) {
        if (options?.throwOnError) {
            throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ERRORS"].NO_CONTENT);
        }
        return {
            valid: false,
            errors,
            schema: finalInput
        };
    }
    dereference(finalInput, filesystem, file ?? entrypoint, /* @__PURE__ */ new WeakSet(), errors, options);
    errors = errors.filter((error, index, self)=>index === self.findIndex((t)=>t.message === error.message && t.code === error.code));
    return {
        valid: errors.length === 0,
        errors,
        schema: finalInput
    };
}
function dereference(schema, filesystem, entrypoint, resolvedSchemas, errors, options) {
    if (schema === null || resolvedSchemas.has(schema)) {
        return;
    }
    resolvedSchemas.add(schema);
    function resolveExternal(externalFile) {
        dereference(externalFile.specification, filesystem, externalFile, resolvedSchemas, errors, options);
        return externalFile;
    }
    while(schema.$ref !== void 0){
        const resolved = resolveUri(schema.$ref, options, entrypoint, filesystem, resolveExternal, errors);
        if (typeof resolved !== "object" || resolved === null) {
            break;
        }
        const dereferencedRef = schema.$ref;
        delete schema.$ref;
        for (const key of Object.keys(resolved)){
            if (schema[key] === void 0) {
                schema[key] = resolved[key];
            }
        }
        if (dereferencedRef) {
            options?.onDereference?.({
                schema,
                ref: dereferencedRef
            });
        }
    }
    for (const value of Object.values(schema)){
        if (typeof value === "object" && value !== null) {
            dereference(value, filesystem, entrypoint, resolvedSchemas, errors, options);
        }
    }
}
function resolveUri(uri, options, file, filesystem, resolve, errors) {
    if (typeof uri !== "string") {
        if (options?.throwOnError) {
            throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ERRORS"].INVALID_REFERENCE.replace("%s", uri));
        }
        errors.push({
            code: "INVALID_REFERENCE",
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ERRORS"].INVALID_REFERENCE.replace("%s", uri)
        });
        return void 0;
    }
    const [prefix, path] = uri.split("#", 2);
    const isDifferentFile = prefix !== file.filename;
    if (prefix && isDifferentFile) {
        const externalReference = filesystem.find((entry)=>{
            return entry.filename === prefix;
        });
        if (!externalReference) {
            if (options?.throwOnError) {
                throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ERRORS"].EXTERNAL_REFERENCE_NOT_FOUND.replace("%s", prefix));
            }
            errors.push({
                code: "EXTERNAL_REFERENCE_NOT_FOUND",
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ERRORS"].EXTERNAL_REFERENCE_NOT_FOUND.replace("%s", prefix)
            });
            return void 0;
        }
        if (path === void 0) {
            return externalReference.specification;
        }
        return resolveUri(`#${path}`, options, resolve(externalReference), filesystem, resolve, errors);
    }
    const segments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$segments$2d$from$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentsFromPath"])(path);
    try {
        return segments.reduce((acc, key)=>{
            return acc[key];
        }, file.specification);
    } catch (_error) {
        if (options?.throwOnError) {
            throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ERRORS"].INVALID_REFERENCE.replace("%s", uri));
        }
        errors.push({
            code: "INVALID_REFERENCE",
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ERRORS"].INVALID_REFERENCE.replace("%s", uri)
        });
    }
    return void 0;
}
;
 //# sourceMappingURL=resolve-references.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/dereference.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dereference",
    ()=>dereference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$details$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/details.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$entrypoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/get-entrypoint.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$make$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/make-filesystem.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$resolve$2d$references$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/resolve-references.js [app-rsc] (ecmascript)");
;
;
;
;
function dereference(value, options) {
    const filesystem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$make$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeFilesystem"])(value);
    const entrypoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$entrypoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEntrypoint"])(filesystem);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$resolve$2d$references$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveReferences"])(filesystem, options);
    return {
        specification: entrypoint.specification,
        errors: result.errors,
        schema: result.schema,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$details$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["details"])(entrypoint.specification)
    };
}
;
 //# sourceMappingURL=dereference.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/upgrade.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "upgrade",
    ()=>upgrade
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$upgrader$40$0$2e$1$2e$6$2f$node_modules$2f40$scalar$2f$openapi$2d$upgrader$2f$dist$2f$upgrade$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-upgrader@0.1.6/node_modules/@scalar/openapi-upgrader/dist/upgrade.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$entrypoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/get-entrypoint.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/is-filesystem.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$normalize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.23.11/node_modules/@scalar/openapi-parser/dist/utils/normalize.js [app-rsc] (ecmascript)");
;
;
;
;
function upgrade(value) {
    if (!value) {
        return {
            specification: null,
            version: "3.1"
        };
    }
    const document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$upgrader$40$0$2e$1$2e$6$2f$node_modules$2f40$scalar$2f$openapi$2d$upgrader$2f$dist$2f$upgrade$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upgrade"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFilesystem"])(value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$entrypoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEntrypoint"])(value).specification : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$23$2e$11$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$normalize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalize"])(value), "3.1");
    return {
        specification: document,
        // TODO: Make dynamic
        version: "3.1"
    };
}
;
 //# sourceMappingURL=upgrade.js.map
}),
];

//# sourceMappingURL=981f6_%40scalar_openapi-parser_dist_936d6ff1._.js.map