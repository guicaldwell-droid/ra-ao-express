import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUp, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business, categories, products, filterProducts, whatsappDestination, type CategoryId } from "@/lib/racao-content";
import { publicUrl, withPublicBase } from "@/lib/public-url";
import capturedCSS from "../styles/site.css?raw";
import expressCSS from "../styles/racao.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Ração Express — a alegria do seu pet começa aqui" },
    { name: "description", content: "Conheça a Ração Express, explore as categorias de produtos para pets e saiba como consultar disponibilidade pelo canal oficial." },
    { property: "og:title", content: "Ração Express — a alegria do seu pet começa aqui" },
    { property: "og:description", content: "Rações, petiscos, acessórios e cuidados: conheça a Ração Express e acompanhe a preparação do catálogo." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  staticData: { importedDocument: { html: { lang: "pt-BR" }, body: {} } },
  component: Index,
});

const navigation = [
  { href: "#loja", label: "Produtos" },
  { href: "#como-pedir", label: "Como pedir" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

// Reserved for the client's original image, never a replacement wordmark.
function OfficialLogoSpace({ large = false }: { large?: boolean }) {
  return <span className={large ? "official-logo-space official-logo-space--large" : "official-logo-space"}>[LOGO OFICIAL]</span>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState<CategoryId | "todos">("todos");
  const menuButton = useRef<HTMLButtonElement>(null);
  const contactHref = whatsappDestination(business.whatsapp);
  const visibleProducts = filterProducts(products, category);
  const selectedCategory = categories.find(item => item.id === category);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMenuOpen(false); menuButton.current?.focus(); }
    };
    const onResize = () => { if (window.innerWidth > 760) setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => { document.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, [menuOpen]);

  return <>
    <style>{withPublicBase(capturedCSS)}</style>
    <style>{withPublicBase(expressCSS)}</style>
    <div className="racao-site">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <div className="topline"><span>O universo do seu pet.</span><span>Ração Express</span></div>
      <header className="site-header" id="topo">
        <a href="#topo" className="brand" aria-label="Ração Express, início"><OfficialLogoSpace /></a>
        <Button variant="ghost" size="icon" ref={menuButton} className="express-menu" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(open => !open)}>{menuOpen ? <X /> : <Menu />}</Button>
        <nav id="main-nav" className={`main-nav${menuOpen ? " main-nav--open" : ""}`} aria-label="Navegação principal">
          {navigation.map(item => <Button asChild variant="ghost" className="nav-link" key={item.href}><a href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a></Button>)}
          <Button asChild variant="express" className="nav-cta"><a href="#loja" onClick={() => setMenuOpen(false)}>Ver produtos</a></Button>
        </nav>
      </header>
      <main id="conteudo">
        <section className="hero-showcase" aria-labelledby="showcase-title">
          <div className="hero-showcase__heading"><p className="express-eyebrow">Para quem ama de quatro patas</p><h1 id="showcase-title">Ração<br /><span>Express</span><span className="hero-period" aria-hidden="true">.</span></h1></div>
          <img className="hero-showcase__dog" src={publicUrl("/site-assets/d6ef1513abcf50bc.webp")} alt="Beagle em fotografia ilustrativa, olhando atento para a frente" fetchPriority="high" />
          <div className="hero-showcase__copy"><p className="hero-tagline">A alegria do seu pet<br />começa por aqui.</p><p>Um mundo para explorar.<br />Uma rotina com mais carinho.</p><div className="hero-actions"><Button asChild variant="express" size="lg"><a href="#loja">Ver produtos</a></Button><Button asChild variant="editorial"><a href="#como-pedir">Como pedir</a></Button></div></div>
          <span className="hero-photo-caption">Imagem ilustrativa</span>
        </section>
        <section className="promise-band" aria-label="Informações a confirmar"><span>[REGIÃO DE ATENDIMENTO]</span><span>[CONDIÇÃO DE ENTREGA A CONFIRMAR]</span><span>[DIFERENCIAL A CONFIRMAR]</span></section>
        <section className="choose section-pad" id="loja" aria-labelledby="shop-title">
          <div className="choose__heading"><div><p className="express-eyebrow">01 / O universo pet</p><h2 id="shop-title">Cada necessidade.<br /><em>Um novo achado.</em></h2></div><p>Explore as categorias.<br />Produtos e disponibilidade<br />a confirmar no catálogo oficial.</p></div>
          <div className="express-categories">{categories.map((item, index) => <article className={`express-category express-category--${item.id}`} key={item.id}><Button asChild variant="category" className="category-action"><a href="#destaques" onClick={() => setCategory(item.id)}><span className="category-index">0{index + 1}</span><img src={item.image} alt={item.alt} loading="lazy" /><span className="category-name">{item.name}</span><span className="category-caption">Categoria a confirmar</span></a></Button></article>)}</div>
        </section>
        <section className="catalog section-pad" id="destaques" aria-labelledby="catalog-title">
          <div className="catalog-heading"><div><p className="express-eyebrow">02 / Para conhecer melhor</p><h2 id="catalog-title">Os próximos<br /><em>favoritos.</em></h2></div><p>O catálogo está em preparação.<br />Sem produtos, preços ou estoque confirmados.</p></div>
          <div className="catalog-filters" role="group" aria-label="Filtrar categorias"><Button variant={category === "todos" ? "express" : "ghost"} aria-pressed={category === "todos"} onClick={() => setCategory("todos")}>Todas</Button>{categories.map(item => <Button key={item.id} variant={category === item.id ? "express" : "ghost"} aria-pressed={category === item.id} onClick={() => setCategory(item.id)}>{item.name}</Button>)}</div>
          <p className="catalog-state" aria-live="polite">{selectedCategory ? `${selectedCategory.name}: produtos a confirmar` : "Todos os produtos: informações a confirmar"}</p>
          {visibleProducts.length > 0 ? <div className="product-grid">{visibleProducts.map(product => <article className="product-slot" key={product.id}><img src={product.image} alt={product.name} loading="lazy" /><h3>{product.name}</h3><p>{product.description}</p><p>{product.price}</p></article>)}</div> : <div className="product-grid">{[1, 2, 3].map(slot => <article className="product-slot" key={slot}><div className="product-image-space"><ImageIcon aria-hidden="true" /><span>[FOTO DO PRODUTO]</span></div><p className="slot-label">Conteúdo a confirmar / 0{slot}</p><h3>[PRODUTO]</h3><p>[DESCRIÇÃO]</p><p className="product-price">[PREÇO]</p></article>)}</div>}
        </section>
        <section className="care section-pad" id="como-pedir" aria-labelledby="order-title"><div className="order-heading"><p className="express-eyebrow">03 / Do seu jeito</p><h2 id="order-title">Escolha com calma.<br /><em>Peça com confiança.</em></h2></div><ol className="order-steps"><li><span className="step-number">01</span><h3>Escolha os produtos</h3><p>Explore o catálogo quando os produtos oficiais estiverem disponíveis.</p></li><li><span className="step-number">02</span><h3>Consulte os detalhes</h3><p>Confirme disponibilidade e condições de entrega pelo canal oficial.</p></li><li><span className="step-number">03</span><h3>Confirme seu pedido</h3><p>Combine os detalhes com a equipe antes de confirmar pelo canal oficial.</p></li></ol><div className="order-footnote"><span>Canal oficial: {business.whatsapp || "[WHATSAPP A CONFIRMAR]"}</span><Button asChild variant="editorial"><a href="#contato">Informações de contato</a></Button></div></section>
        <section className="about section-pad" id="sobre" aria-labelledby="about-title"><div className="about__visual"><OfficialLogoSpace large /></div><div className="about__copy"><p className="express-eyebrow">04 / Prazer, Ração Express</p><h2 id="about-title">De pet para pet.<br /><em>De gente para gente.</em></h2><p className="about__lead">A alegria do seu pet é o ponto de partida.</p><p className="brand-presentation">{business.presentation}</p><Button asChild variant="editorial"><a href="#loja">Explore as categorias</a></Button></div></section>
        <section className="visit section-pad" id="contato" aria-labelledby="visit-title"><div className="visit__copy"><p className="express-eyebrow">05 / Vamos conversar</p><h2 id="visit-title">Seu pet merece<br /><em>essa atenção.</em></h2><p>Os contatos e as condições de atendimento serão informados aqui assim que confirmados.</p><Button asChild variant="express" size="lg"><a href={contactHref || "#loja"}>{contactHref ? "Conversar no WhatsApp" : "Ver categorias"}</a></Button></div><dl className="visit__details"><div><dt>WhatsApp</dt><dd>{contactHref ? <a href={contactHref} target="_blank" rel="noreferrer">{business.whatsapp}</a> : "[WHATSAPP]"}</dd></div><div><dt>Endereço / região</dt><dd>{business.address || "[ENDEREÇO]"}<br />{business.region || "[CIDADE/REGIÃO]"}</dd></div><div><dt>Horário de atendimento</dt><dd>{business.hours || "[HORÁRIO]"}</dd></div><div><dt>Instagram</dt><dd>{business.instagram || "[INSTAGRAM]"}</dd></div><div className="delivery-detail"><dt>Condições de entrega</dt><dd>[CONDIÇÃO DE ENTREGA]</dd></div></dl></section>
      </main>
      <footer className="footer"><div className="footer-top"><OfficialLogoSpace /><p>Para quem faz do carinho<br />parte da rotina.</p><nav aria-label="Navegação do rodapé">{navigation.map(item => <Button key={item.href} asChild variant="ghost"><a href={item.href}>{item.label}</a></Button>)}</nav></div><div className="footer-legal"><details><summary>Termos</summary><p>[TERMOS A CONFIRMAR]</p></details><details><summary>Política de privacidade</summary><p>[POLÍTICA DE PRIVACIDADE A CONFIRMAR]</p></details><span>© 2026 Ração Express</span><Button asChild variant="ghost" size="icon"><a href="#topo" aria-label="Voltar ao topo" title="Voltar ao topo"><ArrowUp /></a></Button></div></footer>
    </div>
    <ImportedAsideEditWithLovable />
  </>;
}

function ImportedAsideEditWithLovable() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div onClick={(event) => { if (event.target instanceof Element && event.target.closest("#lovable-badge-close")) setDismissed(true); }}>
    <aside className="items-center normal-case! [will-change:transform,opacity]" id="lovable-badge" role="complementary" dir="ltr" lang="en" aria-label="Edit with Lovable"><a className="items-baseline [gap:var(--badge-gap)]" aria-label="Edit with Lovable" href="https://lovable.dev/projects/lovp_3w8vt65vdb9d7segfy8k97wpsy?utm_source=lovable-badge" id="lovable-badge-cta" rel="noopener nofollow" target="_blank">{"\n\t\t"}<span id="lovable-badge-text">Edit with</span>{"\n\t\t"}<span id="lovable-badge-logo"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="16" fill="none" viewBox="0 0 52 16">{"\n  "}<path fill="#FCFBF8" fillRule="evenodd" d="M20.318 5.25c.643 0 1.206.14 1.69.418a2.81 2.81 0 0 1 1.118 1.191c.266.513.4 1.115.4 1.807s-.134 1.296-.4 1.812a2.81 2.81 0 0 1-1.118 1.193c-.484.278-1.047.418-1.69.418s-1.208-.14-1.695-.418a2.85 2.85 0 0 1-1.125-1.193c-.262-.516-.393-1.12-.393-1.812s.131-1.294.393-1.807a2.848 2.848 0 0 1 1.125-1.191c.487-.279 1.052-.418 1.695-.418Zm0 1.425c-.27 0-.504.076-.7.228-.193.147-.34.37-.443.67-.102.295-.153.66-.153 1.093 0 .435.05.801.153 1.1.102.3.25.524.443.676.196.147.43.22.7.22.27 0 .502-.073.694-.22.193-.152.341-.375.443-.67.103-.299.153-.667.153-1.106 0-.65-.112-1.145-.337-1.481a1.08 1.08 0 0 0-.953-.51ZM32.7 5.25c.61 0 1.127.1 1.549.3.422.197.74.48.953.849.217.368.325.809.325 1.32v2.704c0 .29.02.562.062.812.044.245.108.4.19.466V12h-1.935a5.895 5.895 0 0 1-.105-.684 7.745 7.745 0 0 1-.02-.228 2.293 2.293 0 0 1-.151.203c-.205.242-.47.437-.793.584-.32.143-.685.215-1.094.215-.406 0-.77-.08-1.094-.24a1.845 1.845 0 0 1-.756-.682 1.984 1.984 0 0 1-.27-1.045c0-.606.178-1.069.535-1.388.356-.324.87-.534 1.542-.633l1.125-.16c.225-.032.403-.074.534-.123a.622.622 0 0 0 .288-.196.549.549 0 0 0 .093-.327.65.65 0 0 0-.11-.367.702.702 0 0 0-.32-.27c-.14-.07-.31-.105-.51-.105-.32 0-.576.083-.768.251-.193.164-.298.39-.314.676h-1.923c.016-.434.147-.82.393-1.155.25-.34.596-.604 1.039-.792.442-.189.954-.283 1.535-.283Zm.99 3.498a.98.98 0 0 1-.215.14 2.49 2.49 0 0 1-.584.178l-.473.092c-.315.061-.553.156-.713.283-.155.127-.233.305-.233.534 0 .23.084.412.252.547.168.135.383.203.645.203s.494-.058.694-.173c.201-.118.355-.282.461-.49.11-.21.166-.448.166-.714v-.6Zm4.526-2.375c.065-.125.138-.243.221-.349.197-.25.437-.44.719-.571.282-.135.6-.203.952-.203.528 0 .988.138 1.377.412.389.275.688.67.896 1.186.21.512.314 1.12.314 1.824 0 .7-.107 1.309-.32 1.825-.213.512-.518.906-.915 1.18-.393.275-.854.412-1.383.412-.352 0-.667-.062-.946-.184a1.832 1.832 0 0 1-.7-.554 2.2 2.2 0 0 1-.234-.383V12h-1.843V3h1.862v3.373Zm1.284.296c-.274 0-.51.085-.707.253-.192.163-.338.397-.436.7a3.376 3.376 0 0 0-.148 1.05c0 .406.05.759.148 1.058.098.299.243.53.436.694.197.164.433.246.707.246.279 0 .512-.082.7-.246.193-.164.336-.395.43-.694.099-.3.148-.652.148-1.058 0-.405-.05-.757-.147-1.056-.095-.299-.238-.53-.43-.694a1.015 1.015 0 0 0-.7-.253Zm9.416-1.419c.602 0 1.136.131 1.604.393.466.262.829.643 1.086 1.143.263.5.394 1.097.394 1.794 0 .25-.002.449-.006.596H47.51c.018.288.071.538.164.75a1.3 1.3 0 0 0 .491.596c.214.13.465.196.757.196.319 0 .583-.082.792-.246.209-.167.34-.403.393-.706h1.862a2.48 2.48 0 0 1-.485 1.235 2.54 2.54 0 0 1-1.051.805c-.439.188-.949.283-1.53.283-.655 0-1.225-.125-1.708-.375a2.672 2.672 0 0 1-1.13-1.143c-.267-.508-.4-1.137-.4-1.887 0-.712.14-1.327.418-1.843a2.86 2.86 0 0 1 1.155-1.186c.491-.27 1.051-.405 1.678-.405Zm-.044 1.345c-.274 0-.516.068-.725.203a1.29 1.29 0 0 0-.479.59 2.045 2.045 0 0 0-.132.498h2.562a1.873 1.873 0 0 0-.138-.602 1.061 1.061 0 0 0-.418-.516 1.243 1.243 0 0 0-.67-.173Z" clipRule="evenodd" />{"\n  "}<path fill="#FCFBF8" d="m26.605 9.995 1.342-4.566h1.924L27.628 12h-2.07l-2.33-6.57h1.98l1.397 4.565Zm-13.013.143h2.256c1.632 0 1.421 1.837 1.418 1.861h-5.603V3h1.93v7.138Zm31.516 1.861h-1.862V3h1.862v8.999Z" />{"\n  "}<path fill="url(#a)" fillRule="evenodd" d="M2.7 3c1.492 0 2.7 1.192 2.7 2.663v1.012h.9c1.49 0 2.7 1.192 2.7 2.662S7.791 12 6.3 12H0V5.663C0 4.193 1.209 3 2.7 3Z" clipRule="evenodd" />{"\n  "}<defs><radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="matrix(-1.54236 7.07838 -10.231 -2.15602 4.627 5.022)" gradientUnits="userSpaceOnUse"><stop offset=".106" stopColor="#FE7B02" /><stop offset=".394" stopColor="#FE3F21" /><stop offset=".608" stopColor="#F858BC" /><stop offset=".929" stopColor="#575ECF" /></radialGradient></defs>{"\n"}</svg>{"\n\n"}</span>{"\n\t"}</a><span id="lovable-badge-divider" aria-hidden="true" /><button className="items-center justify-center min-w-[24px]" id="lovable-badge-close" aria-label="Dismiss" title="Dismiss" type="button">{"\n\t\t"}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true">{"\n\t\t\t"}<path d="M10.646 4.646a.5.5 0 1 1 .707.708L8.707 8l2.646 2.646a.5.5 0 1 1-.707.707L8 8.707l-2.646 2.646a.5.5 0 1 1-.708-.707L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708L8 7.293l2.646-2.647Z" />{"\n\t\t"}</svg>{"\n\t"}</button></aside>
    </div>
  );
}
