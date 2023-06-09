import Image from 'next/image';

export default function Cards() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src="/public/vercel.svg" alt="Shoes" width={500} height={500} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}
