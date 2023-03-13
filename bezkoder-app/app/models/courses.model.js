module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      responsible_name: String,
      responsible_id: Number,
      responsible_email: String,
      status: String,
      start_date: String,
      slug: String,
      id: Number,
      is_paid: Number,
      currency: String,
      price: Number,
      count_student: Number
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
  //  object.id = _id;
    return object;
  });

  const Courses = mongoose.model("courses", schema);
  return Courses;
};
