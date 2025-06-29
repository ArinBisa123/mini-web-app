export default function BootcampCard({ product }) {
  return (
    <div className=" flex flex-col items-center w-2/4 border rounded-xl p-5 shadow hover:shadow-lg">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-sm text-gray-500 mt-2">{product.description}</p>
      <p className="text-teal-600 font-semibold mt-2">{product.price}</p>
      <button className="mt-4 w-2/5 bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
        Daftar Sekarang
      </button>
    </div>
  );
}
