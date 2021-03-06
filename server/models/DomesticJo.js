const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose.connection);

const locationObject = isRequired => {
  return {
    provinceName: {
      type: String,
      required: isRequired
    },
    provinceKey: {
      type: String,
      required: isRequired
    },
    city: {
      type: String,
      required: isRequired
    },
    location: {
      type: String,
      required: isRequired
    }
  };
};

const requiredString = {
  type: String,
  required: true
};

const dateObject = {
  type: Date,
  default: Date.now,
  required: true
};

const operationObject = {
  isFinished: {
    type: Boolean,
    default: false,
    required: true
  },
  completionRemarks: {
    type: String,
    default: "n/a"
  },
  timeFinished: {
    type: Date
  },
  username: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  statuses: [
    {
      username: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      status: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true,
        default: "Info"
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
};

const DomesticJoSchema = new Schema({
  shipperConsignee: requiredString,
  associate: requiredString,
  modeOfTransport: requiredString,
  commodity: {
    type: {
      type: String
    },
    description: {
      type: String,
      required: true
    }
  },
  blAwb: {
    type: String
  },
  origin: locationObject(true),
  portOfDeparture: locationObject(false),
  portOfArrival: locationObject(false),
  destination: locationObject(true),
  pickupDate: dateObject,
  etd: dateObject,
  eta: dateObject,
  orderRemarks: {
    type: String,
    default: "n/a"
  },
  contact: {
    name: {
      type: String
    },
    number: {
      type: String
    },
    email: {
      type: String
    }
  },
  status: {
    type: String,
    default: "Ongoing",
    required: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  timeCompleted: {
    type: Date
  },
  completionRemarks: {
    type: String,
    default: "n/a"
  },
  timeCreated: {
    type: Date,
    required: true,
    default: Date.now
  },
  timeModified: {
    type: Date
  },
  operations: {
    preloading: operationObject,
    loading: operationObject,
    unloading: operationObject
  },
  type: {
    type: String,
    default: "Domestic",
    required: true
  }
});

DomesticJoSchema.plugin(autoIncrement.plugin, {
  model: "domesticLogs",
  field: "number",
  startAt: 1,
  incrementBy: 1
});

module.exports = DomesticLog = mongoose.model(
  "domesticLogs",
  DomesticJoSchema
);
