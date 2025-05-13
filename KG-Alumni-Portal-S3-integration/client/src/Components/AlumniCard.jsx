const AlumniCard = ({ name, batch, program, location, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-gray-300"
      />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p className="text-gray-600">Class of {batch}</p>
      <p className="text-sm text-gray-500">{program}</p>
      <p className="text-sm text-gray-400">{location}</p>
    </div>
  );
};

export default AlumniCard;
