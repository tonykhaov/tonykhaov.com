import { Header, Footer } from 'src/components/screens'

export default function About(): JSX.Element {
  return (
    <>
      <Header />
      <main className="container h-full px-4 py-6 mx-auto">
        <h1 className="text-2xl font-semibold">
          About me{' '}
          <span role="img" aria-label="Tony emoji">
            👨
          </span>
        </h1>
        <p className="mt-5 text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque iusto eos quisquam
          nam corrupti architecto maiores assumenda obcaecati nobis, recusandae porro deleniti omnis
          quis quos illo odit neque, eligendi sint ex? Temporibus quisquam porro nesciunt iure
          tenetur perspiciatis sed? Deleniti porro dolores libero dolorum error soluta, eius eum,
          veritatis, assumenda fugiat sequi. Incidunt quasi quo molestias reiciendis accusamus iure
          soluta laborum labore eius, corrupti aut numquam a neque aperiam quod, non reprehenderit?
          Quod beatae expedita reiciendis, iure voluptate mollitia soluta eaque quas perferendis,
          pariatur consequuntur aliquid neque? Natus veritatis, reiciendis, numquam placeat amet
          maxime reprehenderit architecto laborum, praesentium necessitatibus error! Odio explicabo
          illum laborum, libero officiis at voluptatibus ut quidem facilis ab sed incidunt soluta?
          Adipisci molestiae vitae eius sint.
        </p>
      </main>
      <Footer />
    </>
  )
}
