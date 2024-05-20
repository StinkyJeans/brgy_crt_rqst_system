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
    email: {
      type: String,
      required: true,
    },

    documentTitle: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['completed', 'pending'],
      default: 'pending',
      required: true,
    },

  },
  { timestamps: true }
);

export default mongoose.models.Certificates || mongoose.model('Certificates', certificatesSchema);
