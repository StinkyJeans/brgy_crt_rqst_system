import mongoose from 'mongoose';

const { Schema } = mongoose;

const certificatesSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
    },
    documentTitle: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

export default mongoose.models.Certificates || mongoose.model('Certificates', certificatesSchema);
