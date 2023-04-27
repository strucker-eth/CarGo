import Navigation from '../components/Header'
import Image from 'next/image'
import Cards from '@/components/Card'
import landing from '@/components/Hero'


export default function Home() {
  return (
    <>
      <Navigation />

      <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
   
   <div id="car_Cards" class="flex justify-center mt-3 mb-4 flex-wrap gap-7">
<Cards />
<Cards />
     <Cards />
     <Cards />
<Cards />
     <Cards />
     </div>

<div id="CTA" >
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Hello there</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

</div>






    </>
  )
}