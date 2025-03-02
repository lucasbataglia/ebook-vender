import React, { useState } from 'react';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  // Não precisamos mais do manipulador de envio personalizado
  // O formulário HTML padrão agora faz o trabalho de enviar para o ActiveCampaign
  const handleSubmit = (e) => {
    // Esta função não é mais usada, mantida apenas para referência
    e.preventDefault();
    console.log("Esta função não é mais usada - o formulário agora envia diretamente para o ActiveCampaign");
    setSubmitted(true);
  }
  
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Header */}
      <header className="pt-6 px-4 md:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/Logos/Logo Horizontal-Negativo.png" 
                alt="LUKAO.TV" 
                className="h-10 w-auto"
                onError={(e) => {
                  console.error("Logo failed to load");
                  e.target.outerHTML = `
                    <div class="flex items-center">
                      <div class="mr-2 relative">
                        <div class="h-8 w-12 bg-cyan-400 rounded-r-full flex items-center justify-center">
                          <div class="h-3 w-3 bg-gray-900 rounded-full ml-1"></div>
                        </div>
                        <div class="absolute top-3.5 right-0 h-1 w-6 bg-cyan-300"></div>
                      </div>
                      <div class="font-bold text-xl text-white">LUKAO<span class="text-cyan-400">.TV</span></div>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
          
          {/* Slogan */}
          <div className="hidden sm:flex items-center">
            <div className="relative">
              <span className="text-sm font-light tracking-wide text-gray-400 italic">
                para amantes do mercado de skins de CS2
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Background */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        
        {/* Bullet trail decorations */}
        <div className="absolute right-10 top-20 opacity-40 hidden lg:block">
          <div className="h-1 w-64 bg-cyan-400 rounded-full transform -rotate-12"></div>
          <div className="h-1 w-48 bg-cyan-400 rounded-full transform -rotate-8 mt-3 ml-8"></div>
          <div className="h-1 w-32 bg-cyan-400 rounded-full transform -rotate-4 mt-3 ml-16"></div>
        </div>
        <div className="absolute left-4 bottom-20 opacity-30 hidden lg:block">
          <div className="h-1 w-32 bg-cyan-400 rounded-full transform rotate-12"></div>
          <div className="h-1 w-48 bg-cyan-400 rounded-full transform rotate-8 mt-3 ml-8"></div>
          <div className="h-1 w-64 bg-cyan-400 rounded-full transform rotate-4 mt-3 ml-16"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-12">
            {/* Left column - Main title, benefits and Form */}
            <div className="flex flex-col md:pr-6">
              <div className="relative">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-cyan-400">GUIA DEFINITIVO:</span><br />
                  LUCRE MAIS VENDENDO<br />SUAS SKINS DE CS2
                </h1>
              </div>
              
              <p className="text-lg text-gray-300 mb-6">
                Descubra como vender suas skins pelo <span className="font-bold text-cyan-400">valor real</span> e evitar as armadilhas que fazem a maioria dos jogadores perder dinheiro vendendo mal.
              </p>
              
              {/* Key benefits in a more compact format */}
              <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 mb-6 border border-gray-700 relative overflow-hidden">
                <div className="absolute -right-12 -top-12 w-24 h-24 bg-cyan-500 opacity-10 rounded-full"></div>
                <h3 className="font-bold text-lg mb-3 relative z-10">Neste guia você vai aprender:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-2 mt-0.5">✓</span>
                    <span className="text-sm">Analisar a <strong>liquidez</strong> de skins</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-2 mt-0.5">✓</span>
                    <span className="text-sm">Usar o <strong>Buff163</strong> como referência</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-2 mt-0.5">✓</span>
                    <span className="text-sm">As <strong>melhores plataformas</strong> de venda</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-2 mt-0.5">✓</span>
                    <span className="text-sm"><strong>Transferir e sacar</strong> criptomoedas</span>
                  </div>
                </div>
              </div>
              
              {/* Form - Moved to left column */}
              <div id="form-section" className="bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-xl border border-gray-700 relative w-full mb-0 md:mb-7">
                
                {!submitted ? (
                  <>
                    <h2 className="text-2xl font-bold mb-4 text-center">Baixe Grátis o E-book</h2>
                    <p className="text-gray-300 mb-6 text-center">
                      Descubra os segredos que os traders profissionais usam para maximizar o valor de cada skin. Acesso imediato após cadastro!
                    </p>
                    
                    {/* Formulário do ActiveCampaign com nossa estilização */}
                    <form 
                      method="POST" 
                      id="_form_1_" 
                      className="space-y-4"
                      noValidate
                      onSubmit={(e) => {
                        // Previne o redirecionamento padrão
                        e.preventDefault();
                        
                        const form = e.target;
                        const isValid = form.checkValidity();
                        
                        if (isValid && email.includes('@') && email.includes('.')) {
                          // Envio manual via fetch para prevenir redirecionamento
                          const formData = new FormData();
                          formData.append('u', '1');
                          formData.append('f', '1');
                          formData.append('s', '');
                          formData.append('c', '0');
                          formData.append('m', '0');
                          formData.append('act', 'sub');
                          formData.append('v', '2');
                          formData.append('or', '430ed3f02f4062b22f639542d29bcb9c');
                          formData.append('email', email);
                          
                          fetch('https://lukao.activehosted.com/proc.php', {
                            method: 'POST',
                            body: formData,
                            mode: 'no-cors' // Evita erros de CORS
                          })
                          .then(() => {
                            // Mostra mensagem de sucesso mesmo sem ver a resposta
                            setSubmitted(true);
                            console.log('Formulário enviado com sucesso!');
                          })
                          .catch(error => {
                            console.error('Erro ao enviar formulário:', error);
                            // Ainda mostramos mensagem de sucesso para o usuário
                            setSubmitted(true);
                          });
                        }
                      }}
                    >
                      {/* Não precisamos mais de campos ocultos já que enviamos tudo via JavaScript */}
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          Seu melhor e-mail
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          placeholder="seuemail@exemplo.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      
                      <button
                        id="_form_1_submit"
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-bold py-3.5 px-4 rounded-md hover:from-cyan-500 hover:to-cyan-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 ring-offset-2 ring-offset-gray-800 shadow-lg hover:shadow-cyan-500/40 transform hover:-translate-y-0.5 border border-cyan-300 relative overflow-hidden"
                      >
                        QUERO RECEBER O GUIA AGORA
                      </button>
                    </form>
                    
                    
                    <p className="text-xs text-gray-400 mt-4 text-center">
                      Seus dados estão seguros e nunca serão compartilhados.
                      Você pode cancelar sua inscrição a qualquer momento.
                    </p>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 text-cyan-600 mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Obrigado por se inscrever!</h3>
                    <p className="text-gray-300 mb-4">
                      Verifique seu email para receber o guia. Se não encontrar, confira a pasta de spam.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-cyan-500 hover:text-cyan-400 font-medium"
                    >
                      Voltar ao formulário
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right column - Mockup and Author Info */}
            <div className="flex flex-col items-center">
              {/* E-book Mockup */}
              <div className="relative mb-10 transform -rotate-3 transition-transform hover:rotate-0 duration-700 hover:scale-105 w-full max-w-md mx-auto group perspective" style={{perspective: '1000px'}}>
                {/* Enhanced book shadows and 3D lighting effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-400 blur-md opacity-40 rounded-lg transform scale-105"></div>
                <div className="absolute inset-0 bg-black opacity-30 transform scale-105 translate-y-6 rounded-lg blur-md"></div>
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-white opacity-10 rounded-full blur-xl"></div>
                
                {/* Book binding/spine with premium leather-like texture */}
                <div className="absolute left-0 top-5 bottom-5 w-10 bg-gradient-to-b from-gray-800 to-gray-900 rounded-l-lg transform -translate-x-3 shadow-md border-l border-t border-b border-gray-700 group-hover:translate-x-1 transition-all duration-500">
                  {/* Spine decorative elements */}
                  <div className="absolute top-10 left-1/2 w-6 h-0.5 bg-gray-600 transform -translate-x-1/2"></div>
                  <div className="absolute top-14 left-1/2 w-6 h-0.5 bg-gray-600 transform -translate-x-1/2"></div>
                  <div className="absolute bottom-10 left-1/2 w-6 h-0.5 bg-gray-600 transform -translate-x-1/2"></div>
                  <div className="absolute bottom-14 left-1/2 w-6 h-0.5 bg-gray-600 transform -translate-x-1/2"></div>
                  
                  {/* Spine title - vertical text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="transform -rotate-90 whitespace-nowrap">
                      <span className="text-xs text-gray-400 font-light tracking-wider opacity-70">CS2 GUIDE</span>
                    </div>
                  </div>
                </div>
                
                {/* Book pages edge with realistic page texture */}
                <div className="absolute right-0 top-3 bottom-3 w-6 bg-gradient-to-b from-gray-100 to-gray-200 transform translate-x-1 rounded-r-sm z-0 group-hover:translate-x-0 transition-all duration-500 shadow-inner">
                  {/* Layered pages with depth effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(50)].map((_, i) => (
                      <div key={i} 
                        className="h-0.5 bg-gradient-to-r from-gray-200 to-gray-100 w-full mt-0.5" 
                        style={{
                          opacity: 0.3 + (Math.random() * 0.7),
                          transform: `translateY(${i * 2}px) translateX(${Math.sin(i/10) * 1}px)`
                        }}></div>
                    ))}
                  </div>
                  {/* Page edge shadows */}
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-gray-300 to-transparent"></div>
                </div>
                
                {/* Book cover design - realistic hardcover book appearance */}
                <div className="relative overflow-hidden shadow-xl border border-gray-700 transform group-hover:translate-x-2 transition-all duration-500 z-10 rounded-lg group-hover:rounded-r-md">
                  {/* Premium background gradient for cover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900"></div>
                  
                  {/* Premium light effects - reduced top-right light */}
                  <div className="absolute -top-28 -right-20 w-28 h-28 bg-gradient-to-br from-cyan-600 to-cyan-700 opacity-40 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-cyan-700 to-cyan-800 opacity-50 rounded-full blur-lg"></div>
                  
                  {/* Book cover texture - leather-like */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: "30px 30px"
                  }}></div>
                  
                  {/* Embossed effect and slight vignette for realism */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-5"></div>
                  <div className="absolute inset-0 shadow-inner"></div>
                  <div className="absolute inset-0 bg-radial-gradient opacity-20" style={{
                    background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0.4) 100%)'
                  }}></div>
                  
                  {/* Premium gold/metallic accent trims with enhanced realistic effects */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gold-gradient opacity-80 shadow-sm overflow-hidden group-hover:opacity-90 transition-opacity duration-500">
                    {/* Enhanced metallic shimmer effect */}
                    <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow"></div>
                    {/* Light reflection */}
                    <div className="absolute inset-y-0 left-1/4 w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-shimmer-fast" style={{animationDelay: '0.5s'}}></div>
                    {/* Embossed effect */}
                    <div className="absolute inset-x-0 bottom-0 h-px bg-amber-950 opacity-20"></div>
                    <div className="absolute inset-x-0 top-0 h-px bg-yellow-100 opacity-40"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gold-gradient opacity-70 shadow-sm overflow-hidden group-hover:opacity-80 transition-opacity duration-500">
                    {/* Enhanced metallic shimmer effect */}
                    <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow" style={{animationDelay: '1.5s'}}></div>
                    {/* Light reflection */}
                    <div className="absolute inset-y-0 right-1/4 w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-shimmer-fast" style={{animationDelay: '2s'}}></div>
                    {/* Embossed effect */}
                    <div className="absolute inset-x-0 bottom-0 h-px bg-amber-950 opacity-20"></div>
                    <div className="absolute inset-x-0 top-0 h-px bg-yellow-100 opacity-40"></div>
                  </div>
                  
                  {/* Enhanced Gold corner accents with premium finish */}
                  <div className="absolute top-0 left-0 w-10 h-10 transform group-hover:scale-105 transition-transform duration-500">
                    {/* Horizontal line with enhanced gold effect */}
                    <div className="absolute top-0 left-0 w-10 h-1 bg-gold-gradient shadow-sm overflow-hidden">
                      <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow"></div>
                      <div className="absolute inset-y-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-glow"></div>
                    </div>
                    {/* Vertical line with enhanced gold effect */}
                    <div className="absolute top-0 left-0 w-1 h-10 bg-gold-gradient shadow-sm overflow-hidden">
                      <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow" style={{animationDelay: '0.7s'}}></div>
                      <div className="absolute inset-x-0 h-full w-full bg-gradient-to-b from-white via-transparent to-transparent opacity-60 animate-glow" style={{animationDelay: '0.3s'}}></div>
                    </div>
                    {/* Decorative dot */}
                    <div className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full bg-gold-radial shadow-sm animate-pulse-subtle" style={{animationDelay: '1.2s'}}></div>
                  </div>
                  
                  <div className="absolute top-0 right-0 w-10 h-10 transform group-hover:scale-105 transition-transform duration-500">
                    {/* Horizontal line with enhanced gold effect */}
                    <div className="absolute top-0 right-0 w-10 h-1 bg-gold-gradient shadow-sm overflow-hidden">
                      <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow" style={{animationDelay: '0.3s'}}></div>
                      <div className="absolute inset-y-0 w-full h-full bg-gradient-to-l from-transparent via-white to-transparent opacity-60 animate-glow" style={{animationDelay: '0.6s'}}></div>
                    </div>
                    {/* Vertical line with enhanced gold effect */}
                    <div className="absolute top-0 right-0 w-1 h-10 bg-gold-gradient shadow-sm overflow-hidden">
                      <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow" style={{animationDelay: '1s'}}></div>
                      <div className="absolute inset-x-0 h-full w-full bg-gradient-to-b from-white via-transparent to-transparent opacity-60 animate-glow" style={{animationDelay: '0.9s'}}></div>
                    </div>
                    {/* Decorative dot */}
                    <div className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-gold-radial shadow-sm animate-pulse-subtle" style={{animationDelay: '1.5s'}}></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-10 h-10 transform group-hover:scale-105 transition-transform duration-500">
                    {/* Horizontal line with enhanced gold effect */}
                    <div className="absolute bottom-0 left-0 w-10 h-1 bg-gold-gradient shadow-sm overflow-hidden">
                      <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute inset-y-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-glow" style={{animationDelay: '1.2s'}}></div>
                    </div>
                    {/* Vertical line with enhanced gold effect */}
                    <div className="absolute bottom-0 left-0 w-1 h-10 bg-gold-gradient shadow-sm overflow-hidden">
                      <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow" style={{animationDelay: '1.3s'}}></div>
                      <div className="absolute inset-x-0 h-full w-full bg-gradient-to-t from-white via-transparent to-transparent opacity-60 animate-glow" style={{animationDelay: '1.5s'}}></div>
                    </div>
                    {/* Decorative dot */}
                    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 rounded-full bg-gold-radial shadow-sm animate-pulse-subtle" style={{animationDelay: '0.9s'}}></div>
                  </div>
                  
                  <div className="absolute bottom-0 right-0 w-10 h-10 transform group-hover:scale-105 transition-transform duration-500">
                    {/* Horizontal line with enhanced gold effect */}
                    <div className="absolute bottom-0 right-0 w-10 h-1 bg-gold-gradient shadow-sm overflow-hidden">
                      <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow" style={{animationDelay: '0.8s'}}></div>
                      <div className="absolute inset-y-0 w-full h-full bg-gradient-to-l from-transparent via-white to-transparent opacity-60 animate-glow" style={{animationDelay: '1.8s'}}></div>
                    </div>
                    {/* Vertical line with enhanced gold effect */}
                    <div className="absolute bottom-0 right-0 w-1 h-10 bg-gold-gradient shadow-sm overflow-hidden">
                      <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow" style={{animationDelay: '1.6s'}}></div>
                      <div className="absolute inset-x-0 h-full w-full bg-gradient-to-t from-white via-transparent to-transparent opacity-60 animate-glow" style={{animationDelay: '2.1s'}}></div>
                    </div>
                    {/* Decorative dot */}
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-gold-radial shadow-sm animate-pulse-subtle" style={{animationDelay: '1.7s'}}></div>
                  </div>
                  
                  {/* Subtle gold accents on the sides */}
                  <div className="absolute top-1/4 left-0 w-0.5 h-10 bg-gold-gradient opacity-40 overflow-hidden">
                    <div className="absolute inset-0 bg-gold-shine opacity-60 animate-shimmer-slow" style={{animationDelay: '2s'}}></div>
                  </div>
                  <div className="absolute top-1/4 right-0 w-0.5 h-10 bg-gold-gradient opacity-40 overflow-hidden">
                    <div className="absolute inset-0 bg-gold-shine opacity-60 animate-shimmer-slow" style={{animationDelay: '1.2s'}}></div>
                  </div>
                  <div className="absolute bottom-1/4 left-0 w-0.5 h-10 bg-gold-gradient opacity-40 overflow-hidden">
                    <div className="absolute inset-0 bg-gold-shine opacity-60 animate-shimmer-slow" style={{animationDelay: '0.4s'}}></div>
                  </div>
                  <div className="absolute bottom-1/4 right-0 w-0.5 h-10 bg-gold-gradient opacity-40 overflow-hidden">
                    <div className="absolute inset-0 bg-gold-shine opacity-60 animate-shimmer-slow" style={{animationDelay: '1.8s'}}></div>
                  </div>
                  <div className="px-6 py-14 md:py-16">
                    {/* Book content */}
                    <div className="flex justify-center items-center mb-10 relative -mt-7">
                      {/* Logo sem efeito de brilho */}
                      <img 
                        src="/Logos/Logo Horizontal-Negativo.png" 
                        alt="LUKAO.TV" 
                        className="h-6 w-auto"
                        onError={(e) => {
                          console.error("Logo failed to load");
                          e.target.outerHTML = `
                            <div class="flex items-center">
                              <div class="mr-2 relative">
                                <div class="h-8 w-12 bg-cyan-400 rounded-r-full flex items-center justify-center">
                                  <div class="h-3 w-3 bg-gray-900 rounded-full ml-1"></div>
                                </div>
                                <div class="absolute top-3.5 right-0 h-1 w-6 bg-cyan-300"></div>
                              </div>
                              <div class="font-bold text-xl text-white">LUKAO<span class="text-cyan-400">.TV</span></div>
                            </div>
                          `;
                        }}
                      />
                    </div>
                    
                    <div className="flex justify-center w-full mb-5 mt-4">
                      <div className="relative inline-block text-center">
                        {/* Main title with clean, minimal styling */}
                        <h2 className="relative">
                          <div className="text-sm uppercase tracking-wider font-medium mb-1 text-gray-400">O Guia Definitivo</div>
                          <div className="text-xl md:text-2xl font-bold text-white">
                            COMO VENDER SKINS DE CS2
                          </div>
                          
                          {/* Simple decorative underline */}
                          <div className="w-20 h-0.5 bg-cyan-500 mx-auto mt-2 rounded-full"></div>
                        </h2>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="w-full max-w-xs mx-auto opacity-95 rounded-lg relative overflow-hidden flex items-center justify-center p-2">
                        {/* Gráfico financeiro SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" className="w-full h-auto">
                          {/* Background */}
                          <rect width="500" height="300" fill="#171b26" rx="10" ry="10" />
                          
                          {/* Grid lines */}
                          <path d="M50,50 L50,250 L450,250" stroke="#1f2b3e" strokeWidth="1" />
                          <path d="M50,200 L450,200" stroke="#1f2b3e" strokeWidth="1" strokeDasharray="2,2" />
                          <path d="M50,150 L450,150" stroke="#1f2b3e" strokeWidth="1" strokeDasharray="2,2" />
                          <path d="M50,100 L450,100" stroke="#1f2b3e" strokeWidth="1" strokeDasharray="2,2" />
                          <path d="M150,50 L150,250" stroke="#1f2b3e" strokeWidth="1" strokeDasharray="2,2" />
                          <path d="M250,50 L250,250" stroke="#1f2b3e" strokeWidth="1" strokeDasharray="2,2" />
                          <path d="M350,50 L350,250" stroke="#1f2b3e" strokeWidth="1" strokeDasharray="2,2" />
                          
                          {/* Y-axis labels */}
                          <text x="40" y="250" fontFamily="Arial, sans-serif" fontSize="10" fill="#8f9bab" textAnchor="end">0</text>
                          <text x="40" y="200" fontFamily="Arial, sans-serif" fontSize="10" fill="#8f9bab" textAnchor="end">100</text>
                          <text x="40" y="150" fontFamily="Arial, sans-serif" fontSize="10" fill="#8f9bab" textAnchor="end">200</text>
                          <text x="40" y="100" fontFamily="Arial, sans-serif" fontSize="10" fill="#8f9bab" textAnchor="end">300</text>
                          <text x="40" y="50" fontFamily="Arial, sans-serif" fontSize="10" fill="#8f9bab" textAnchor="end">400</text>
                          
                          {/* X-axis labels */}
                          <text x="50" y="265" fontFamily="Arial, sans-serif" fontSize="10" fill="#8f9bab" textAnchor="middle">JAN</text>
                          <text x="150" y="265" fontFamily="Arial, sans-serif" fontSize="10" fill="#8f9bab" textAnchor="middle">MAR</text>
                          <text x="250" y="265" fontFamily="Arial, sans-serif" fontSize="10" fill="#8f9bab" textAnchor="middle">JUN</text>
                          <text x="350" y="265" fontFamily="Arial, sans-serif" fontSize="10" fill="#8f9bab" textAnchor="middle">SET</text>
                          <text x="450" y="265" fontFamily="Arial, sans-serif" fontSize="10" fill="#8f9bab" textAnchor="middle">DEZ</text>
                          
                          {/* Gradient for area chart */}
                          <defs>
                            <linearGradient id="areaGradientEbook" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#1f93b0" stopOpacity="0.7" />
                              <stop offset="100%" stopColor="#1f93b0" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          
                          {/* Volume bars (subtle) */}
                          <rect x="70" y="230" width="10" height="20" fill="#1f93b0" opacity="0.2" />
                          <rect x="110" y="225" width="10" height="25" fill="#1f93b0" opacity="0.2" />
                          <rect x="150" y="220" width="10" height="30" fill="#1f93b0" opacity="0.3" />
                          <rect x="190" y="215" width="10" height="35" fill="#1f93b0" opacity="0.3" />
                          <rect x="230" y="220" width="10" height="30" fill="#1f93b0" opacity="0.3" />
                          <rect x="270" y="210" width="10" height="40" fill="#1f93b0" opacity="0.4" />
                          <rect x="310" y="200" width="10" height="50" fill="#1f93b0" opacity="0.4" />
                          <rect x="350" y="190" width="10" height="60" fill="#1f93b0" opacity="0.5" />
                          <rect x="390" y="180" width="10" height="70" fill="#1f93b0" opacity="0.5" />
                          <rect x="430" y="170" width="10" height="80" fill="#1f93b0" opacity="0.6" />
                          
                          {/* Main price chart line */}
                          <path d="M50,230 C80,220 100,210 150,200 S200,220 250,180 S300,140 350,120 S400,100 450,80" 
                                fill="none" stroke="#00c07f" strokeWidth="3" />
                          
                          {/* Area under the chart */}
                          <path d="M50,230 C80,220 100,210 150,200 S200,220 250,180 S300,140 350,120 S400,100 450,80 L450,250 L50,250 Z" 
                                fill="url(#areaGradientEbook)" />
                          
                          {/* Data points */}
                          <circle cx="50" cy="230" r="4" fill="#00c07f" />
                          <circle cx="150" cy="200" r="4" fill="#00c07f" />
                          <circle cx="250" cy="180" r="4" fill="#00c07f" />
                          <circle cx="350" cy="120" r="4" fill="#00c07f" />
                          <circle cx="450" cy="80" r="4" fill="#00c07f" />
                          
                          {/* Market events - keeping the circle highlight without the text */}
                          <circle cx="250" cy="180" r="6" fill="none" stroke="#ffffff" strokeWidth="2" />
                          
                          {/* Final value indicator */}
                          <rect x="380" y="65" width="70" height="30" rx="5" fill="#1a2133" stroke="#00c07f" strokeWidth="1" />
                          <text x="415" y="85" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#ffffff" textAnchor="middle">+165%</text>
                          
                          {/* Legend */}
                          <rect x="50" y="280" width="10" height="10" fill="#00c07f" />
                          <text x="65" y="289" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff">VALOR DE MERCADO</text>
                          
                          <rect x="180" y="280" width="10" height="10" fill="#1f93b0" opacity="0.4" />
                          <text x="195" y="289" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff">VOLUME DE NEGOCIAÇÃO</text>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Added space between graph and footer */}
                    <div className="h-8"></div>

                    {/* Book footer with metadata - professional publisher style */}
                    <div className="bg-gradient-to-b from-gray-800 to-gray-900 bg-opacity-80 mt-2 p-4 rounded-b border-t border-gray-700 relative">
                      {/* Premium gold foil stamp effect - common in luxury books - NO ANIMATION */}
                      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-24 h-24 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-gold-radial opacity-70 absolute"></div>
                          <div className="w-9 h-9 rounded-full border-2 border-gold-gradient absolute overflow-hidden">
                            <div className="absolute inset-0 bg-gold-shine opacity-50"></div>
                          </div>
                          <div className="w-9 h-9 flex items-center justify-center relative">
                            <div className="text-xs font-bold text-gold-gradient">PREMIUM</div>
                          </div>
                        </div>
                      </div>
                    
                      {/* Professional ISBN-like barcode simulation with gold accent */}
                      <div className="absolute right-3 bottom-3 flex flex-col items-end opacity-80">
                        <div className="text-[8px] text-gray-400 mb-1 tracking-wide flex items-center">
                          <span className="mr-1 text-[7px] bg-gold-gradient bg-clip-text text-transparent">PREMIUM</span>
                          ISBN 978-85-5080-442-3
                        </div>
                        <div className="h-5 w-14 flex flex-col justify-between relative">
                          {/* Gold trim accent */}
                          <div className="absolute -left-1 top-0 bottom-0 w-0.5 bg-gold-gradient opacity-60"></div>
                          
                          {/* Barcode lines with more professional styling */}
                          {[...Array(10)].map((_, i) => (
                            <div key={i} className="h-0.5 bg-gray-300" style={{
                              width: `${60 + Math.random() * 40}%`,
                              opacity: 0.5 + Math.random() * 0.5,
                              marginLeft: i % 3 === 0 ? '20%' : i % 2 === 0 ? '10%' : '0%'
                            }}></div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center pb-1">
                        <div className="bg-gold-gradient h-7 w-7 rounded-full flex items-center justify-center mr-3 shadow-md overflow-hidden">
                          {/* Static highlight without animation */}
                          <div className="absolute inset-0 bg-gold-shine opacity-50"></div>
                          {/* Content */}
                          <div className="text-xs font-bold text-white relative z-10">45</div>
                        </div>
                        <div className="text-xs text-gray-200 font-bold tracking-wide">PÁGINAS DE CONTEÚDO GRATUITO</div>
                      </div>
                      
                      {/* Publisher mark */}
                      <div className="w-full mt-2 pt-2 border-t border-gray-700 border-opacity-40 flex justify-between items-center">
                        <div className="text-[9px] text-gray-400 tracking-wide">www.lukao.tv</div>
                        <div className="text-[9px] text-gold-gradient opacity-90">© 2024 LUKAO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Page count info */}
              <div className="flex items-center justify-center text-sm text-gray-400 mb-3 w-full">
                <svg className="w-5 h-5 mr-2 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Conteúdo prático, detalhado e fácil de aplicar
              </div>
              
              {/* Author Info - Moved to right column */}
              <div className="flex items-center p-4 bg-gray-800 bg-opacity-90 rounded-lg border border-gray-700 mb-6 relative w-full mt-auto">
                
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src="/Logos/Icone Perfil Twitch.jpg"
                    alt="Lucas Bataglia" 
                    className="w-14 h-14 rounded-full object-cover border-2 border-cyan-500"
                    onError={(e) => {
                      console.error("Image failed to load");
                      e.target.outerHTML = '<div class="w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">LB</div>';
                    }}
                  />
                </div>
                <div>
                  <h3 className="font-bold">Lucas Bataglia (Lukao)</h3>
                  <p className="text-sm text-gray-300">
                    Há mais de 5 anos vivendo do mercado de skins de CS2 (antigo CSGO)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 opacity-80"></div>
        
        {/* Bullet decoration */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="h-8 w-8 bg-cyan-500 rounded-full flex items-center justify-center">
            <div className="h-3 w-3 bg-gray-900 rounded-full"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold inline-block relative">
              O Que Você Vai Aprender
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-500 opacity-50"></div>
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Domine as técnicas usadas pelos traders profissionais para maximizar seus lucros com skins de CS2
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Valor Real das Skins",
                description: "Como analisar o valor correto de cada skin baseado no Buff163 e outros marketplaces globais."
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Análise de Liquidez",
                description: "Aprenda a identificar quais skins são mais fáceis de vender e como isso afeta o preço e a estratégia de venda."
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Pagamento em Cripto",
                description: "Como configurar carteiras e receber pagamentos em criptomoedas com segurança e taxas reduzidas."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-700 relative transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
                {/* Bullet decoration for each card */}
                <div className="absolute -right-2 -top-2">
                  <div className="h-4 w-4 bg-cyan-500 rounded-full"></div>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 bg-gray-800 p-3 rounded-full">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* What's Inside Section */}
      <section className="py-16 px-4 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-900 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-cyan-900 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
      
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Left Column - Ebook Preview */}
            <div className="md:w-5/12 lg:w-1/3 flex justify-center relative order-2 md:order-1">
              <div className="relative w-full max-w-sm perspective" style={{perspective: '1500px'}}>
                {/* 3D Book Effect */}
                <div className="relative group transform transition-all duration-500 hover:rotate-y-5 hover:scale-105">
                  {/* Enhanced book shadow for more depth */}
                  <div className="absolute -bottom-6 -right-6 w-full h-full bg-black rounded-xl -z-20 opacity-40 blur-md"></div>
                  <div className="absolute -bottom-3 -right-3 w-full h-full bg-black rounded-xl -z-10 opacity-20 blur-sm"></div>
                  
                  {/* Book spine with gold accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-700 rounded-l-lg transform -translate-x-3 shadow-md border-l border-t border-b border-gold-gradient group-hover:translate-x-0 transition-all duration-500">
                    {/* Gold trim on spine */}
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-gold-gradient opacity-40"></div>
                    
                    {/* Spine decorative elements - golden accented */}
                    <div className="absolute top-1/5 left-1/2 w-6 h-0.5 bg-gold-gradient transform -translate-x-1/2 opacity-40"></div>
                    <div className="absolute top-1/3 left-1/2 w-6 h-0.5 bg-gold-gradient transform -translate-x-1/2 opacity-40"></div>
                    <div className="absolute bottom-1/3 left-1/2 w-6 h-0.5 bg-gold-gradient transform -translate-x-1/2 opacity-40"></div>
                    <div className="absolute bottom-1/5 left-1/2 w-6 h-0.5 bg-gold-gradient transform -translate-x-1/2 opacity-40"></div>
                    
                    {/* Spine title with gold accent */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="transform -rotate-90 whitespace-nowrap">
                        <span className="text-xs text-gold-gradient font-medium tracking-wider opacity-80">CS2 PREMIUM GUIDE</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Book cover with more premium gradient and elegant pattern */}
                  <div className="relative bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900 rounded-xl overflow-hidden shadow-2xl border border-gold-gradient z-10 transform group-hover:translate-x-2 transition-all duration-500" style={{height: '580px'}}>
                    {/* Gold trim at top and bottom */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gold-gradient opacity-70 shadow-sm overflow-hidden">
                      <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow"></div>
                      <div className="absolute inset-y-0 left-1/4 w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-shimmer-fast" style={{animationDelay: '0.5s'}}></div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-gold-gradient opacity-70 shadow-sm overflow-hidden">
                      <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow" style={{animationDelay: '1.5s'}}></div>
                      <div className="absolute inset-y-0 right-1/4 w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-shimmer-fast" style={{animationDelay: '2s'}}></div>
                    </div>
                    
                    {/* Gold corner accents - similar to the main e-book in hero section */}
                    <div className="absolute top-0 left-0 w-12 h-12 transform group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute top-0 left-0 w-12 h-1 bg-gold-gradient shadow-sm overflow-hidden">
                        <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow"></div>
                      </div>
                      <div className="absolute top-0 left-0 w-1 h-12 bg-gold-gradient shadow-sm overflow-hidden">
                        <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow" style={{animationDelay: '0.7s'}}></div>
                      </div>
                      <div className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full bg-gold-radial shadow-sm animate-pulse-subtle" style={{animationDelay: '1.2s'}}></div>
                    </div>
                    
                    <div className="absolute top-0 right-0 w-12 h-12 transform group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute top-0 right-0 w-12 h-1 bg-gold-gradient shadow-sm overflow-hidden">
                        <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow" style={{animationDelay: '0.3s'}}></div>
                      </div>
                      <div className="absolute top-0 right-0 w-1 h-12 bg-gold-gradient shadow-sm overflow-hidden">
                        <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow" style={{animationDelay: '1s'}}></div>
                      </div>
                      <div className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-gold-radial shadow-sm animate-pulse-subtle" style={{animationDelay: '1.5s'}}></div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-12 h-12 transform group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute bottom-0 left-0 w-12 h-1 bg-gold-gradient shadow-sm overflow-hidden">
                        <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow" style={{animationDelay: '0.5s'}}></div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-1 h-12 bg-gold-gradient shadow-sm overflow-hidden">
                        <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow" style={{animationDelay: '1.3s'}}></div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 rounded-full bg-gold-radial shadow-sm animate-pulse-subtle" style={{animationDelay: '0.9s'}}></div>
                    </div>
                    
                    <div className="absolute bottom-0 right-0 w-12 h-12 transform group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute bottom-0 right-0 w-12 h-1 bg-gold-gradient shadow-sm overflow-hidden">
                        <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow" style={{animationDelay: '0.8s'}}></div>
                      </div>
                      <div className="absolute bottom-0 right-0 w-1 h-12 bg-gold-gradient shadow-sm overflow-hidden">
                        <div className="absolute inset-0 bg-gold-shine opacity-70 animate-shimmer-slow" style={{animationDelay: '1.6s'}}></div>
                      </div>
                      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-gold-radial shadow-sm animate-pulse-subtle" style={{animationDelay: '1.7s'}}></div>
                    </div>
                    
                    {/* Premium background effects with texture */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: "30px 30px"
                    }}></div>
                    
                    {/* Enhanced light reflections */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan-600 to-gold-gradient opacity-30 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-cyan-700 to-gold-gradient opacity-30 rounded-full blur-2xl"></div>
                    
                    <div className="p-6">
                      {/* Simple logo without effects */}
                      <div className="flex justify-center mb-6 relative mt-2">
                        <div className="relative">
                          {/* Logo image - smaller size */}
                          <img 
                            src="/Logos/Logo Horizontal-Negativo.png" 
                            alt="LUKAO.TV" 
                            className="h-7 w-auto"
                            onError={(e) => {
                              console.error("Logo failed to load");
                              e.target.outerHTML = `
                                <div class="flex items-center">
                                  <div class="mr-1.5 relative">
                                    <div class="h-6 w-9 bg-cyan-400 rounded-r-full flex items-center justify-center">
                                      <div class="h-2 w-2 bg-gray-900 rounded-full ml-1"></div>
                                    </div>
                                    <div class="absolute top-2.5 right-0 h-0.5 w-4 bg-cyan-300"></div>
                                  </div>
                                  <div class="font-bold text-sm text-white">LUKAO<span class="text-cyan-400">.TV</span></div>
                                </div>
                              `;
                            }}
                          />
                        </div>
                      </div>
                      
                      {/* Title styled like the main mockup */}
                      <div className="relative mb-4">
                        <div className="relative inline-block text-center w-full">
                          {/* Using exact same style as main mockup - title only */}
                          <h2 className="relative">
                            <div className="text-sm uppercase tracking-wider font-medium mb-4 text-gray-400">O Guia Definitivo</div>
                            
                            {/* Simple decorative underline - same as main mockup */}
                            <div className="w-20 h-0.5 bg-cyan-500 mx-auto mt-1 rounded-full"></div>
                          </h2>
                        </div>
                      </div>
                      
                      {/* Enhanced content panel with gold accents - centered content */}
                      <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 p-5 rounded-lg mb-8 border border-gold-gradient shadow-inner relative flex justify-center">
                        {/* Gold accent in corner */}
                        <div className="absolute top-0 right-0 w-8 h-8">
                          <div className="absolute top-0 right-0 w-8 h-0.5 bg-gold-gradient opacity-50"></div>
                          <div className="absolute top-0 right-0 w-0.5 h-8 bg-gold-gradient opacity-50"></div>
                        </div>
                        <div className="absolute top-0 left-0 w-8 h-8">
                          <div className="absolute top-0 left-0 w-8 h-0.5 bg-gold-gradient opacity-50"></div>
                          <div className="absolute top-0 left-0 w-0.5 h-8 bg-gold-gradient opacity-50"></div>
                        </div>
                        
                        <div className="relative max-w-xs">
                          <h3 className="text-center font-bold text-lg mb-5 text-gold-gradient">Conteúdo</h3>
                          
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-gold-gradient mr-2 shadow-sm"></div>
                              <span className="text-sm font-medium text-gold-gradient">Valor e Liquidez</span>
                            </div>
                            <span className="text-xs text-gray-400 bg-gray-800 px-2 py-0.5 rounded-full border border-gray-700">Pág. 3</span>
                          </div>
                          
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-gold-gradient mr-2 shadow-sm"></div>
                              <span className="text-sm font-medium text-gold-gradient">Plataformas e Marketplaces</span>
                            </div>
                            <span className="text-xs text-gray-400 bg-gray-800 px-2 py-0.5 rounded-full border border-gray-700">Pág. 12</span>
                          </div>
                          
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-gold-gradient mr-2 shadow-sm"></div>
                              <span className="text-sm font-medium text-gold-gradient">Pagamentos e Cripto</span>
                            </div>
                            <span className="text-xs text-gray-400 bg-gray-800 px-2 py-0.5 rounded-full border border-gray-700">Pág. 22</span>
                          </div>
                          
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-gold-gradient mr-2 shadow-sm"></div>
                              <span className="text-sm font-medium text-gold-gradient">Segurança e Otimização</span>
                            </div>
                            <span className="text-xs text-gray-400 bg-gray-800 px-2 py-0.5 rounded-full border border-gray-700">Pág. 33</span>
                          </div>
                          
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-gold-gradient mr-2 shadow-sm"></div>
                              <span className="text-sm font-medium text-gold-gradient">Minhas Experiências</span>
                            </div>
                            <span className="text-xs text-gray-400 bg-gray-800 px-2 py-0.5 rounded-full border border-gray-700">Pág. 40</span>
                          </div>
                          
                          {/* Gold accent at bottom */}
                          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-gradient to-transparent mx-auto mt-4 opacity-40"></div>
                        </div>
                      </div>
                      
                      {/* Mini-quote - fora do container */}
                      <div className="text-center mt-6 italic bg-gray-800 py-3 px-4 rounded-lg shadow-md border border-gray-700">
                        <span className="text-sm text-white font-medium">"Maximize seus lucros"</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Premium page edge effect */}
                  <div className="absolute right-0 top-3 bottom-3 w-4 bg-gradient-to-b from-gray-100 to-gray-300 transform translate-x-0.5 rounded-r-sm group-hover:translate-x-1 transition-all duration-500 shadow-inner z-0">
                    {/* Layered pages with depth effect */}
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(15)].map((_, i) => (
                        <div key={i} 
                          className="h-0.5 bg-gradient-to-r from-gray-200 to-gray-100 w-full mt-1" 
                          style={{
                            opacity: 0.4 + (Math.random() * 0.6),
                            transform: `translateY(${i * 4}px) translateX(${Math.sin(i/3) * 0.5}px)`
                          }}></div>
                      ))}
                    </div>
                    {/* Edge shadow */}
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-gray-400 to-transparent opacity-30"></div>
                  </div>
                </div>
              </div>
            </div>
                
            {/* Right Column - Content */}
            <div className="md:w-7/12 lg:w-2/3 order-1 md:order-2">
              <div className="md:ml-6 lg:ml-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 relative inline-block">
                  Conteúdo Completo
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-500 opacity-50"></div>
                </h2>
                
                <p className="text-gray-300 mb-6">
                  Este guia foi desenvolvido após anos de experiência no mercado de skins de CS2. São 45 páginas de conteúdo prático que vão te ensinar a evitar as armadilhas que fazem a maioria dos jogadores perder dinheiro.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-900 bg-opacity-80 p-4 rounded-lg border-l-2 border-cyan-500">
                    <h3 className="font-bold text-lg mb-2 flex items-center">
                      <span className="bg-cyan-500 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">1</span>
                      Valor e Liquidez
                    </h3>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span>Entendendo exteriores e floats</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span>Como identificar skins líquidas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span>Usando o Buff163 como referência</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 bg-opacity-80 p-4 rounded-lg border-l-2 border-cyan-500">
                    <h3 className="font-bold text-lg mb-2 flex items-center">
                      <span className="bg-cyan-500 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">2</span>
                      Plataformas e Marketplaces
                    </h3>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span>Marketplaces P2P vs bots</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span>Comparativo de taxas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span>5+ marketplaces recomendados</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 bg-opacity-80 p-4 rounded-lg border-l-2 border-cyan-500">
                    <h3 className="font-bold text-lg mb-2 flex items-center">
                      <span className="bg-cyan-500 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">3</span>
                      Pagamentos e Cripto
                    </h3>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span>Como criar carteiras seguras</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span>Transferência e saque de valores</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span>Convertendo cripto para reais</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 bg-opacity-80 p-4 rounded-lg border-l-2 border-cyan-500">
                    <h3 className="font-bold text-lg mb-2 flex items-center">
                      <span className="bg-cyan-500 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">4</span>
                      Segurança e Otimização
                    </h3>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span>Proteção da conta Steam</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span>Evitando golpes comuns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span>Maximizando seus lucros</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Stats Bar */}
                <div className="bg-gray-900 rounded-lg p-4 flex flex-wrap justify-between items-center mb-6">
                  <div className="text-center px-4 py-2">
                    <div className="text-2xl font-bold text-cyan-400">45+</div>
                    <div className="text-xs text-gray-400">Páginas</div>
                  </div>
                  <div className="text-center px-4 py-2">
                    <div className="text-2xl font-bold text-cyan-400">10+</div>
                    <div className="text-xs text-gray-400">Sites Analisados</div>
                  </div>
                  <div className="text-center px-4 py-2">
                    <div className="text-2xl font-bold text-cyan-400">5+</div>
                    <div className="text-xs text-gray-400">Anos de Experiência</div>
                  </div>
                  <div className="text-center px-4 py-2">
                    <div className="text-2xl font-bold text-cyan-400">15-30%</div>
                    <div className="text-xs text-gray-400">Economia Possível</div>
                  </div>
                </div>
                
                {/* Author Quote */}
                <div className="bg-gradient-to-r from-cyan-900 to-gray-900 p-4 rounded-lg flex items-start shadow-lg">
                  <div className="flex-shrink-0 mr-4 hidden sm:block">
                    <img 
                      src="/Logos/Icone Perfil Twitch.jpg"
                      alt="Lucas Bataglia" 
                      className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500"
                      onError={(e) => {
                        console.error("Image failed to load");
                        e.target.outerHTML = '<div class="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">LB</div>';
                      }}
                    />
                  </div>
                  <div>
                    <p className="italic text-gray-300 mb-2">
                      "Desenvolvi este guia depois de ver tantos jogadores perdendo dinheiro por falta de conhecimento. Apliquei tudo o que aprendi em anos trabalhando com skins para criar um conteúdo verdadeiramente prático."
                    </p>
                    <div className="font-bold">Lucas Bataglia (Lukao)</div>
                    <div className="text-xs text-gray-400">Trader de skins e criador de conteúdo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-90"></div>
        
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-900 rounded-full opacity-20 filter blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-cyan-900 rounded-full opacity-20 filter blur-3xl"></div>
        
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold inline-block relative">
              O que dizem sobre o guia
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-500 opacity-50"></div>
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Veja os resultados reais que outros jogadores obtiveram aplicando as técnicas do guia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                text: "Consegui vender minha AWP com 15% a mais do que me ofereciam antes. O guia paga-se em uma única venda!",
                name: "Gabriel S.",
                title: "Jogador de CS2",
                rating: 5
              },
              {
                text: "Nunca imaginei que estava perdendo tanto dinheiro nas minhas vendas. Esse guia mudou completamente minha forma de negociar skins.",
                name: "Marcos R.",
                title: "Colecionador de skins",
                rating: 5
              },
              {
                text: "As dicas sobre as taxas de cada marketplace e como trabalhar com cripto valeram cada minuto de leitura.",
                name: "Rafael K.",
                title: "Trader iniciante",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-lg relative transition-transform hover:-translate-y-1 duration-300">
                {/* Star rating */}
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Decorative bullet for middle card */}
                {index === 1 && (
                  <div className="absolute -top-3 -right-3">
                    <div className="h-6 w-6 bg-cyan-500 rounded-full flex items-center justify-center">
                      <div className="h-2 w-2 bg-gray-900 rounded-full"></div>
                    </div>
                  </div>
                )}
                
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-cyan-900 rounded-full flex items-center justify-center text-cyan-400 font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
        
        {/* Bullet decorations */}
        
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-cyan-900 opacity-10 filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-900 opacity-10 filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-90 rounded-2xl p-8 border border-gray-700 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para maximizar o valor das suas skins?
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Não perca mais dinheiro com suas skins. Baixe agora o guia completo e descubra como vender suas skins pelo valor que elas realmente valem.
            </p>
            
            <a 
              href="#form-section" 
              onClick={(e) => {
                e.preventDefault();
                // Obter o elemento e sua posição
                const formSection = document.getElementById('form-section');
                const formRect = formSection.getBoundingClientRect();
                const absoluteTop = window.pageYOffset + formRect.top;
                // Rolar para bem acima do formulário (350px acima)
                window.scrollTo({ 
                  top: absoluteTop - 350, 
                  behavior: 'smooth' 
                });
              }}
              className="inline-block bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-bold py-4 px-10 rounded-md hover:from-cyan-500 hover:to-cyan-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-cyan-500/50 transform hover:-translate-y-1 border border-cyan-300 relative overflow-hidden group"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-cyan-400 opacity-20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500"></span>
              <span className="relative z-10">QUERO RECEBER O GUIA AGORA</span>
            </a>
            
            <div className="flex items-center justify-center mt-6">
              <svg className="w-5 h-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-gray-400">
                45 páginas de conteúdo exclusivo. Acesso imediato após o cadastro.
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-400">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-cyan-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 100 12 6 6 0 000-12zm-1 5a1 1 0 112 0v3.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 12.586V9z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Download instantâneo</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-cyan-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Sem riscos, garantido</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-cyan-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="text-sm">+500 usuários satisfeitos</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 py-8 relative">
        <div className="absolute left-0 right-0 top-0 h-1 bg-cyan-500 opacity-30"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="/Logos/Logo Horizontal-Negativo.png" 
                alt="LUKAO.TV" 
                className="h-8 w-auto"
                onError={(e) => {
                  console.error("Logo failed to load");
                  e.target.outerHTML = '<span className="text-white font-bold">LUKAO<span className="text-cyan-400">.TV</span></span>';
                }}
              />
            </div>
            
            <div className="flex mb-4 md:mb-0 space-x-4">
              <a href="https://lukao.tv/live" className="text-gray-200 hover:text-cyan-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.23 7.102c-2.002-.136-6.462-.135-8.461 0-2.165.148-2.419 1.456-2.436 4.898.017 3.436.27 4.75 2.437 4.898 1.999.135 6.459.136 8.461 0 2.165-.148 2.42-1.457 2.437-4.898-.018-3.436-.271-4.75-2.438-4.898zM9.75 12.57v-1.142l2.571 1.144v.004L9.75 12.57z" />
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                </svg>
              </a>
              <a href="https://twitter.com/lukao" className="text-gray-200 hover:text-cyan-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.599-.1-.899a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624a8.645 8.645 0 0 1-2.019 2.083z" />
                </svg>
              </a>
              <a href="https://instagram.com/lukao" className="text-gray-200 hover:text-cyan-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
                  <circle cx="16.806" cy="7.207" r="1.078" />
                  <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
                </svg>
              </a>
            </div>
            
            <div className="text-center md:text-right text-gray-400 text-sm">
              <p>© 2024 Lucas Bataglia. Todos os direitos reservados.</p>
              <p className="mt-1">www.lukao.tv</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;