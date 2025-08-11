
const { Schema } = mongoose;

// Define the schema for storing bot configuration
const configSchema = new Schema({
  id: { type: String, required: true },
  token: { type: String, required: true },
  channel: { type: String, required: true },
});

// Create a model based on the schema
const Config = mongoose.model('Config', configSchema);