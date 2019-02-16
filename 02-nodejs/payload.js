{
    "properties":{
        "longDescription":{
            "description":"Long description of the product.",
            "type":"string"
        },
        "primaryThumbImageURL":{
            "description":"Primary Thumb Image URL of the product.",
            "type":"string"
        },
        "largeImage":{
            "description":"Has repository Id and URL of the product.",
            "type":"object",
            "properties":{
                "id":{
                    "description":"Repository ID",
                    "type":"string"
                },
                "url":{
                    "description":"Repository URL",
                    "type":"string"
                }
            }
        },
        "smallImage":{
            "description":"Small image of product.",
            "type":"string"
        },
        "listVolumePrice":{
            "description":"list volume price of the product",
            "type":"object",
            "properties":{
                "pricingScheme":{
                    "description":"Pricing scheme can be either tieredPrice or bulkPrice",
                    "type":"object",
                    "properties":{
                        "numLevels":{
                            "description":"Number of levels in the volume price",
                            "type":"number"
                        },
                        "levels":{
                            "description":"Price levels array for volume price",
                            "type":"array",
                            "items":{
                                "type":"object",
                                "properties":{
                                    "price":{
                                        "description":"price value for price level",
                                        "type":"number"
                                    },
                                    "levelMinimum":{
                                        "description":"minimum quantity for price level",
                                        "type":"number"
                                    },
                                    "levelMaximum":{
                                        "description":"minimum quantity for price level",
                                        "type":"number"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "displayName":{
            "description":"Display Name of the product.",
            "type":"string"
        },
        "orderLimit":{
            "description":"Order limit of the product.",
            "type":"string"
        },
        "description":{
            "description":"Description of the product.",
            "type":"string"
        },
        "primaryFullImageURL":{
            "description":"Primary full image URL of the product.",
            "type":"string"
        },
        "largeImageURLs":{
            "description":"Large Image URLs of SKU.",
            "type":"array",
            "items":{
                "type":"string"
            }
        },
        "listVolumePrices":{
            "description":"Object with price group IDs as keys and list prices as values",
            "type":"object",
            "properties":{
                "priceGroupId1":{
                    "description":"List price of the product in price group 1",
                    "type":"object",
                    "properties":{
                        "pricingScheme":{
                            "description":"Pricing scheme can be either tieredPrice or bulkPrice",
                            "type":"object",
                            "properties":{
                                "numLevels":{
                                    "description":"Number of levels in the volume price",
                                    "type":"number"
                                },
                                "levels":{
                                    "description":"Price levels array for volume price",
                                    "type":"array",
                                    "items":{
                                        "type":"object",
                                        "properties":{
                                            "price":{
                                                "description":"price value for price level",
                                                "type":"number"
                                            },
                                            "levelMinimum":{
                                                "description":"minimum quantity for price level",
                                                "type":"number"
                                            },
                                            "levelMaximum":{
                                                "description":"minimum quantity for price level",
                                                "type":"number"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "priceGroupId2":{
                    "description":"List price of the product in price group 1",
                    "type":"object",
                    "properties":{
                        "pricingScheme":{
                            "description":"Pricing scheme can be either tieredPrice or bulkPrice",
                            "type":"object",
                            "properties":{
                                "numLevels":{
                                    "description":"Number of levels in the volume price",
                                    "type":"number"
                                },
                                "levels":{
                                    "description":"Price levels array for volume price",
                                    "type":"array",
                                    "items":{
                                        "type":"object",
                                        "properties":{
                                            "price":{
                                                "description":"price value for price level",
                                                "type":"number"
                                            },
                                            "levelMinimum":{
                                                "description":"minimum quantity for price level",
                                                "type":"number"
                                            },
                                            "levelMaximum":{
                                                "description":"minimum quantity for price level",
                                                "type":"number"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "primaryLargeImageURL":{
            "description":"Primary large image URL of the product.",
            "type":"string"
        },
        "addOnProducts":{
            "description":"The array of add-on product groups.",
            "type":"array",
            "items":{
                "type":"object",
                "properties":{
                    "repositoryId":{
                        "type":"string"
                    },
                    "addOnOptions":{
                        "type":"array",
                        "items":{
                            "type":"object",
                            "properties":{
                                "product":{
                                    "description":"The add-on product",
                                    "type":"object",
                                    "properties":{
                                        "displayName":{
                                            "type":"string"
                                        },
                                        "repositoryId":{
                                            "type":"string"
                                        },
                                        "active":{
                                            "type":"boolean"
                                        }
                                    }
                                },
                                "repositoryId":{
                                    "type":"string"
                                },
                                "sku":{
                                    "description":"The add-on sku",
                                    "type":"object",
                                    "properties":{
                                        "displayName":{
                                            "type":"string"
                                        },
                                        "repositoryId":{
                                            "type":"string"
                                        },
                                        "active":{
                                            "type":"boolean"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "smallImageURLs":{
            "description":"Small image URLs of the product.",
            "type":"array",
            "items":{
                "type":"string"
            }
        },
        "id":{
            "description":"Product ID.",
            "type":"string"
        },
        "saleVolumePrices":{
            "description":"Object with price group IDs as keys and sale prices as values",
            "type":"object",
            "properties":{
                "priceGroupId1":{
                    "description":"Sale price of the product in price group 1",
                    "type":"object",
                    "properties":{
                        "pricingScheme":{
                            "description":"Pricing scheme can be either tieredPrice or bulkPrice",
                            "type":"object",
                            "properties":{
                                "numLevels":{
                                    "description":"Number of levels in the volume price",
                                    "type":"number"
                                },
                                "levels":{
                                    "description":"Price levels array for volume price",
                                    "type":"array",
                                    "items":{
                                        "type":"object",
                                        "properties":{
                                            "price":{
                                                "description":"price value for price level",
                                                "type":"number"
                                            },
                                            "levelMinimum":{
                                                "description":"minimum quantity for price level",
                                                "type":"number"
                                            },
                                            "levelMaximum":{
                                                "description":"minimum quantity for price level",
                                                "type":"number"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "priceGroupId2":{
                    "description":"Sale price of the product in price group 1",
                    "type":"object",
                    "properties":{
                        "pricingScheme":{
                            "description":"Pricing scheme can be either tieredPrice or bulkPrice",
                            "type":"object",
                            "properties":{
                                "numLevels":{
                                    "description":"Number of levels in the volume price",
                                    "type":"number"
                                },
                                "levels":{
                                    "description":"Price levels array for volume price",
                                    "type":"array",
                                    "items":{
                                        "type":"object",
                                        "properties":{
                                            "price":{
                                                "description":"price value for price level",
                                                "type":"number"
                                            },
                                            "levelMinimum":{
                                                "description":"minimum quantity for price level",
                                                "type":"number"
                                            },
                                            "levelMaximum":{
                                                "description":"minimum quantity for price level",
                                                "type":"number"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "childSKUs":{
            "description":"Array having the properties of child SKU of the product.",
            "type":"array",
            "items":{
                "type":"object",
                "properties":{
                    "dynamicPropertyMapLong":{
                        "description":"Dynamic Property MapLong of SKU.",
                        "type":"string"
                    },
                    "primaryThumbImageURL":{
                        "description":"Primary Source Image URL of SKU.",
                        "type":"string"
                    },
                    "largeImage":{
                        "description":"Large Image of the SKU.",
                        "type":"string"
                    },
                    "smallImage":{
                        "description":"Small Image URL of SKU.",
                        "type":"string"
                    },
                    "listVolumePrice":{
                        "description":"list volume price of the product",
                        "type":"object",
                        "properties":{
                            "pricingScheme":{
                                "description":"Pricing scheme can be either tieredPrice or bulkPrice",
                                "type":"object",
                                "properties":{
                                    "numLevels":{
                                        "description":"Number of levels in the volume price",
                                        "type":"number"
                                    },
                                    "levels":{
                                        "description":"Price levels array for volume price",
                                        "type":"array",
                                        "items":{
                                            "type":"object",
                                            "properties":{
                                                "price":{
                                                    "description":"price value for price level",
                                                    "type":"number"
                                                },
                                                "levelMinimum":{
                                                    "description":"minimum quantity for price level",
                                                    "type":"number"
                                                },
                                                "levelMaximum":{
                                                    "description":"minimum quantity for price level",
                                                    "type":"number"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "nonreturnable":{
                        "description":"Indicates whether the SKU is returnable or not.",
                        "type":"boolean"
                    },
                    "largeImageURLs":{
                        "description":"Large Image URLs of SKU.",
                        "type":"array",
                        "items":{
                            "type":"string"
                        }
                    },
                    "primaryLargeImageURL":{
                        "description":"Primary Large Image URL of SKU.",
                        "type":"string"
                    },
                    "smallImageURLs":{
                        "description":"Small Image URLs of SKU.",
                        "type":"array",
                        "items":{
                            "type":"string"
                        }
                    },
                    "thumbnailImage":{
                        "description":"Thumbnail Image of SKU.",
                        "type":"string"
                    },
                    "salePriceEndDate":{
                        "description":"Sale Price End Date of the SKU.",
                        "type":"string"
                    },
                    "saleVolumePrice":{
                        "description":"Sale volume price of the product",
                        "type":"object",
                        "properties":{
                            "pricingScheme":{
                                "description":"Pricing scheme can be either tieredPrice or bulkPrice",
                                "type":"object",
                                "properties":{
                                    "numLevels":{
                                        "description":"Number of levels in the volume price",
                                        "type":"number"
                                    },
                                    "levels":{
                                        "description":"Price levels array for volume price",
                                        "type":"array",
                                        "items":{
                                            "type":"object",
                                            "properties":{
                                                "price":{
                                                    "description":"price value for price level",
                                                    "type":"number"
                                                },
                                                "levelMinimum":{
                                                    "description":"minimum quantity for price level",
                                                    "type":"number"
                                                },
                                                "levelMaximum":{
                                                    "description":"minimum quantity for price level",
                                                    "type":"number"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "salePriceStartDate":{
                        "description":"Sale Price Start Date of SKU.",
                        "type":"string"
                    },
                    "quantity":{
                        "description":"Quantity available of SKU.",
                        "type":"integer"
                    },
                    "salePrice":{
                        "description":"Sale Price of SKU.",
                        "type":"string"
                    },
                    "primaryMediumImageURL":{
                        "description":"Primary Medium Image URL ID of SKU.",
                        "type":"string"
                    },
                    "fullImageURLs":{
                        "description":"Full Image URLs of SKU.",
                        "type":"array",
                        "items":{
                            "type":"string"
                        }
                    },
                    "active":{
                        "description":"Indicates whether sku is active or inactive. Inactive SKUs will not appear on the storefront. This property value defaults to true.",
                        "type":"boolean"
                    },
                    "thumbImageURLs":{
                        "description":"Thumb Image URLs of SKU.",
                        "type":"array",
                        "items":{
                            "type":"string"
                        }
                    },
                    "mediumImageURLs":{
                        "description":"Medium Image URLs SKU.",
                        "type":"array",
                        "items":{
                            "type":"string"
                        }
                    },
                    "repositoryId":{
                        "description":"Repository Id of SKU.",
                        "type":"string"
                    },
                    "shippingSurcharge":{
                        "description":"Extra handling costs while shipping the product.",
                        "type":"number"
                    },
                    "primarySourceImageURL":{
                        "description":"Primary Source Image URL of SKU.",
                        "type":"string"
                    },
                    "primarySmallImageURL":{
                        "description":"Primary Small Image URL of SKU.",
                        "type":"string"
                    },
                    "sourceImageURLs":{
                        "description":"Source Image URLs of SKU.",
                        "type":"array",
                        "items":{
                            "type":"string"
                        }
                    },
                    "listPrice":{
                        "description":"List Price of the product SKU.",
                        "type":"number"
                    }
                }
            }
        },
        "saleVolumePrice":{
            "description":"Sale volume price of the product",
            "type":"object",
            "properties":{
                "pricingScheme":{
                    "description":"Pricing scheme can be either tieredPrice or bulkPrice",
                    "type":"object",
                    "properties":{
                        "numLevels":{
                            "description":"Number of levels in the volume price",
                            "type":"number"
                        },
                        "levels":{
                            "description":"Price levels array for volume price",
                            "type":"array",
                            "items":{
                                "type":"object",
                                "properties":{
                                    "price":{
                                        "description":"price value for price level",
                                        "type":"number"
                                    },
                                    "levelMinimum":{
                                        "description":"minimum quantity for price level",
                                        "type":"number"
                                    },
                                    "levelMaximum":{
                                        "description":"minimum quantity for price level",
                                        "type":"number"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "primaryMediumImageURL":{
            "description":"Primary Medium Image URL.",
            "type":"string"
        },
        "salePrice":{
            "description":"Sale Price of the product in the default price group.",
            "type":"number"
        },
        "fullImageURLs":{
            "description":"Full Image URLs.",
            "type":"array",
            "items":{
                "type":"string"
            }
        },
        "thumbImageURLs":{
            "description":"Thumb Image URLs.",
            "type":"array",
            "items":{
                "type":"string"
            }
        },
        "productImages":{
            "description":"Array of product images.",
            "type":"array",
            "items":{
                "type":"string"
            }
        },
        "route":{
            "description":"Route of the product.",
            "type":"string"
        },
        "notForIndividualSale":{
            "description":"States whether not a product may sold be individually rather than, for example, as part of a configured product",
            "type":"boolean"
        },
        "mediumImageURLs":{
            "description":"Medium Image URLs.",
            "type":"array",
            "items":{
                "type":"string"
            }
        },
        "repositoryId":{
            "description":"Repository Id of the product.",
            "type":"string"
        },
        "primarySourceImageURL":{
            "description":"Primary Source Image URL of the product.",
            "type":"string"
        },
        "shippingSurcharge":{
            "description":"Extra handling costs while shipping the product, in the default price group.",
            "type":"number"
        },
        "primarySmallImageURL":{
            "description":"Primary Small Image URL of the product.",
            "type":"string"
        },
        "sourceImageURLs":{
            "description":"Source Image URLs.",
            "type":"array",
            "items":{
                "type":"string"
            }
        },
        "avgCustRating":{
            "description":"Average customer rating of the product.",
            "type":"string"
        },
        "listPrice":{
            "description":"List Price of the product in the default price group.",
            "type":"number"
        }
    }
}