export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-700 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Taeko Cargas</h1>
          <nav className="space-x-6">
            <a href="#servicos" className="hover:underline">Serviços</a>
            <a href="#sobre" className="hover:underline">Sobre</a>
            <a href="#contato" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Transporte rápido e confiável</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Na <strong>Taeko Cargas</strong>, oferecemos soluções personalizadas em transporte, com preços flexíveis e suporte completo para remetente e destinatário.
        </p>
      </section>

      {/* Serviços */}
      <section id="servicos" className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold mb-10 text-center">Nossos Serviços</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-md text-center">
            <h4 className="font-semibold text-xl mb-2">Coletas e Entregas</h4>
            <p>Atendimento rápido e seguro em toda a região.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md text-center">
            <h4 className="font-semibold text-xl mb-2">Cotações</h4>
            <p>Orçamentos ágeis e competitivos para sua carga.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md text-center">
            <h4 className="font-semibold text-xl mb-2">Atendimento Personalizado</h4>
            <p>Suporte dedicado tanto para remetentes quanto destinatários.</p>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Sobre Nós</h3>
          <p>
            A <strong>Taeko Cargas</strong> nasceu para oferecer soluções logísticas completas, garantindo tranquilidade e eficiência para nossos clientes. Nosso compromisso é com a agilidade, segurança e preços justos.
          </p>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Entre em Contato</h3>
        <p className="mb-4">Solicite uma cotação ou fale conosco:</p>
        <p className="font-semibold">📞 (11) 96326-6698</p>
        <p className="font-semibold">✉️ taeko.transportes@gmail.com</p>
        <div className="mt-6">
          <a
            href="https://wa.me/5511963266698"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-2xl shadow-md transition"
          >
            💬 Fale conosco no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-6 mt-10">
        <p>© {new Date().getFullYear()} Taeko Cargas - Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
