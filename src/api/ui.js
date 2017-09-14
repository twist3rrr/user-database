/* eslint-disable */
export default {
    "title": "New request",
    "info": {
        "title": "Main information",
        "fields": {
            "name": {
                "label": "name",
                "placeholder": "Name your request",
            },
            "description": {
                "label": "description",
                "placeholder": "Describe your request",
            }
        }
    },
    "size": {
        "title": "Size",
        "blocks": {
            "dimensionBlock": {
                "width": {
                    "label": "width",
                },
                "height": {
                    "label": "height",
                },
                "dateField": {
                    "label": "Production date",
                    "placeholder": "mm/dd/yy",
                }
            },
            "properties": [
                {
                    "label": "paper type",
                    "items": [
                        {
                            "label": "Choose paper type",
                            "disabled": true,
                            "value": ""
                        },
                        {
                            "label": "Type-1",
                            "disabled": false,
                            "value": "type-1"
                        },
                        {
                            "label": "Type-2",
                            "disabled": false,
                            "value": "type-2"
                        }
                    ]
                },
                {
                    "label": "finishing",
                    "items": [
                        {
                            "label": "Choose finishing",
                            "disabled": true,
                            "value": ""
                        },
                        {
                            "label": "Type-1",
                            "disabled": false,
                            "value": "type-1"
                        },
                        {
                            "label": "Type-2",
                            "disabled": false,
                            "value": "type-2"
                        }
                    ]
                }
            ],
            "amount": [
                {
                    "label": "number of pages"
                },
                {
                    "label": "number of copies"
                }
            ]
        }
    },
    "attachment": {
        "title": "Attachment",
        "info": "Optional (maximum 4 files)",
        "label": "Drag & drop your files here or clock anywhere to upload",
        "reservedLabel": "Click anywhere to upload your files"
    },
    "bidding": {
        "title": "request type",
        "description": "Specify how many parties do you want to receive a bid from",
        "radioButtons": [
            {
                "label": "1-way",
                "id": "r-1",
                "value": "r-1"
            },
            {
                "label": "2-way",
                "id": "r-2",
                "value": "r-2"
            },
            {
                "label": "3-way",
                "id": "r-3",
                "value": "r-2"
            }
        ]
    },
    "bottomBlocks": [
        {
            "title": "Bid deadline",
            "description": "When do you want to receive proposals",
            "inputLabel": "Bid deadline",
            "placeholder": "mm/dd/yy"
        },
        {
            "title": "Date of selection",
            "description": "When will you make a selection",
            "inputLabel": "Date of selection",
            "placeholder": "mm/dd/yy"
        }
    ]
};
/* eslint-enable */
