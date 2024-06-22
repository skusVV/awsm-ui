import mongoose from 'mongoose';

interface AuthorAttrs {
  author_id: string;
  name: string;
  imageUrl: string;
  subName: string;
  description: string;
  recipes: string[];
}

interface AuthorDoc extends mongoose.Document {
  author_id: string;
  name: string;
  imageUrl: string;
  subName: string;
  description: string;
  recipes: string[];
  social: {
    instagram?: string;
    tiktok?: string;
  };
  metaData: {
    title: string;
    description: string;
  };
}

interface AuthorModel extends mongoose.Model<AuthorDoc> {
  build(attrs: AuthorAttrs): AuthorDoc;
}

const authorSchema = new mongoose.Schema<AuthorDoc>({
  author_id: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    unique: true,
    required: true
  },
  imageUrl: String,
  subName: String,
  description: String,
  recipes: [
    {
      type: String
    }
  ],
  social: {
    instagram: String,
    tiktok: String
  },
  metaData: {
    title: String,
    description: String
  }
}, {
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.password;
    },
    versionKey: false
  }
});

authorSchema.statics.build = (attrs: AuthorAttrs) => {
  return new Author(attrs);
};

const Author = mongoose.model<AuthorDoc, AuthorModel>('Author', authorSchema);

export { Author };