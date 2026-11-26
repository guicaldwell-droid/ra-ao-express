import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "The Dog Shoppe — carinho pertinho de você" }] }),
  staticData: { importedDocument: { html: { "lang": "pt-BR" }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div className="topline items-center justify-center normal-case">
        <span>A petshop da sua vizinhança</span>
        <span>Atendimento personalizado</span>
      </div>
      <header className="site-header items-center justify-between" id="topo">
        <a className="brand items-center gap-[10px]" aria-label="The Dog Shoppe, início" href="#topo">
          <span className="brand__mark place-items-center" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <path d="M24 26.2c-4.3 0-9 4.1-9 8.5 0 3.6 3.4 5.2 7.1 4.1 1.2-.4 2.4-.4 3.6 0 3.8 1.1 7.2-.5 7.2-4.1 0-4.4-4.6-8.5-8.9-8.5Z" fill="currentColor" />
              <ellipse cx="11.4" cy="20.2" rx="4.1" ry="5.6" transform="rotate(-28 11.4 20.2)" fill="currentColor" />
              <ellipse cx="21.1" cy="14.4" rx="4.1" ry="5.6" transform="rotate(-8 21.1 14.4)" fill="currentColor" />
              <ellipse cx="31.4" cy="15.7" rx="4.1" ry="5.6" transform="rotate(12 31.4 15.7)" fill="currentColor" />
              <ellipse cx="39" cy="22.6" rx="4.1" ry="5.6" transform="rotate(33 39 22.6)" fill="currentColor" />
            </svg>
          </span>
          <span className="brand__type">
            <strong>the dog</strong>
            <small className="normal-case">SHOPPE · PET &amp; CARE</small>
          </span>
        </a>
        <button className="menu-toggle [@media(width_<=_760px)]:items-center [@media(width_<=_760px)]:gap-[6px] [@media(width_<=_760px)]:justify-center" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="main-nav">
          <span />
          <span />
        </button>
        <nav className="main-nav [@media(width_<=_760px)]:invisible [@media(width_<=_760px)]:[backdrop-filter:blur(16px)_saturate(150%)]" id="main-nav" aria-label="Navegação principal">
          <a className="[@media(width_<=_760px)]:items-center" href="#servicos">Banho &amp; tosa</a>
          <a className="[@media(width_<=_760px)]:items-center" href="#loja">A loja</a>
          <a className="[@media(width_<=_760px)]:items-center" href="#choose">Por que a Dog Shoppe</a>
          <a className="[@media(width_<=_760px)]:items-center" href="#contato">Onde estamos</a>
          <a className="button button--nav items-center gap-[18px] isolate justify-center" href="https://wa.me/5561993351647?text=Ol%C3%A1%21%20Encontrei%20voc%C3%AAs%20pelo%20site." rel="noreferrer" target="_blank">Fale com a gente <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main>
        <section className="hero-showcase isolate" aria-labelledby="showcase-title">
          <h1 className="hero-showcase__word [text-shadow:rgba(24,61,45,0.035)_0px_8px]" id="showcase-title">The Dog</h1>
          <img className="hero-showcase__dog object-contain [object-position:center_bottom]" src="/site-assets/d6ef1513abcf50bc.webp" alt="Cão atento olhando à frente, em primeiro plano" fetchPriority="high" />
        </section>
        <section className="hero hero--below grid-cols-[1.03fr_0.97fr]" id="welcome" aria-labelledby="welcome-title">
          <div className="hero__copy">
            <h2 className="hero__title" id="welcome-title">O cuidado que seu pet merece, <em>bem pertinho.</em></h2>
            <p className="hero__lead">Banho, tosa e uma loja cheia de boas escolhas — com aquele atendimento atencioso que faz toda a diferença.</p>
            <div className="hero__actions items-center">
              <a className="button button--primary items-center gap-[18px] isolate justify-center" href="https://wa.me/5561993351647?text=Ol%C3%A1%21%20Quero%20conhecer%20a%20The%20Dog%20Shoppe." rel="noreferrer" target="_blank">Chamar no WhatsApp <span aria-hidden="true">↗</span></a>
              <a className={"\x74ext-link items-center gap-[9px] isolate"} href="#servicos">Conheça a loja <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__image-wrap">
              <img className="object-cover" src="/site-assets/edd6f09b6a0777ae.jpg" alt="Cão simpático em um ambiente acolhedor de petshop" loading="lazy" />
            </div>
            <div className="hero__caption items-center [gap:0px]"> Cuidado de pertinho, com carinho de verdade</div>
          </div>
          <div className="hero__bottom justify-between normal-case [@media(width_<=_760px)]:gap-[12px]">
            <span>Boas-vindas à The Dog Shoppe</span>
            <span>CA 5 · Brasília <span aria-hidden="true">↘</span></span>
          </div>
        </section>
        <section className="promise-band items-center" aria-label="O que você encontra na The Dog Shoppe">
          <div className="promise-band__item items-center">
            <span>Petshop de bairro</span>
          </div>
          <div className="promise-band__item items-center">
            <span>Atendimento personalizado</span>
          </div>
          <div className="promise-band__item items-center">
            <span>Banho &amp; tosa</span>
          </div>
        </section>
        <section className="choose section-pad" id="choose" aria-labelledby="choose-title">
          <div className="choose__heading items-end gap-[32px] justify-between">
            <div>
              <p className="eyebrow items-center gap-[9px] normal-case"> De pertinho, com carinho</p>
              <h2 id="choose-title">Por que escolher<br /><em>a gente?</em></h2>
            </div>
            <p>Um lugar de bairro, um atendimento atencioso e cuidado pensado para fazer parte da rotina de vocês.</p>
          </div>
          <div className="choose__grid">
            <article className="choose-card choose-card--love isolate">
              <span className="choose-card__eyebrow normal-case">01 / Todo dia</span>
              <h3 className="normal-case">Carinho<br />em cada<br />atendimento</h3>
              <p>Um jeito próximo e personalizado de receber você e seu pet.</p>
              <img className="object-contain object-bottom-right" src="/site-assets/df4dd4815182ea3d.webp" alt="Cão corgi sorridente representando um atendimento acolhedor" loading="lazy" />
            </article>
            <article className="choose-card choose-card--care isolate">
              <span className="choose-card__eyebrow normal-case">02 / Um momento só dele</span>
              <h3 className="normal-case">Banho &amp;<br />tosa com<br />cuidado</h3>
              <p>Um cuidado caprichado para seu pet se sentir bem.</p>
              <img className="object-contain object-bottom-right" src="/site-assets/448d80784de4d293.webp" alt="Retrato de um cão de pelo dourado associado ao banho e tosa" loading="lazy" />
            </article>
            <article className="choose-card choose-card--shop isolate">
              <span className="choose-card__eyebrow normal-case">03 / A loja da vizinhança</span>
              <h3 className="normal-case">Boas escolhas<br />pra rotina<br />pet</h3>
              <p>Uma conversa com a gente ajuda a encontrar o que você procura.</p>
              <img className="object-contain object-bottom-right" src="/site-assets/d6ef1513abcf50bc.webp" alt="Beagle olhando à frente em um recorte para o card da loja pet" loading="lazy" />
            </article>
          </div>
        </section>
        <section className="care section-pad" id="servicos" aria-labelledby="care-title">
          <div className="section-heading section-heading--split items-end gap-[30px] justify-between">
            <div>
              <p className="eyebrow items-center gap-[9px] normal-case"> Um momento só dele</p>
              <h2 id="care-title">Dia de se cuidar.<br /><em>Dia de brilhar.</em></h2>
            </div>
            <p className="section-heading__text">Um banho gostoso, um cuidado caprichado e o tempo que cada pet precisa. Converse com a nossa equipe para saber mais sobre banho e tosa.</p>
          </div>
          <div className="care-card">
            <div className="care-card__photo">
              <img className="object-cover [object-position:center_48%]" src="/site-assets/46af3863455e692f.jpg" alt="Cão recebendo escovação delicada durante os cuidados de higiene" loading="lazy" />
              <span className="care-card__photo-tag">Cuidado sem pressa</span>
            </div>
            <div className="care-card__content">
              <div className="care-card__number normal-case">01 <span>—</span> Cuidado</div>
              <h3>Um cuidado<br />que começa<br /><em>na confiança.</em></h3>
              <p>Banho e tosa com atenção aos detalhes e um jeitinho acolhedor. Porque cada pet é único — e merece ser tratado assim.</p>
              <a className="button button--dark items-center gap-[18px] isolate justify-center" href="https://wa.me/5561993351647?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20banho%20e%20tosa." rel="noreferrer" target="_blank">Pergunte pra gente <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
        <ImportedSectionALojaQueTemum />
        <section className="about section-pad items-center" id="sobre" aria-labelledby="about-title">
          <div className="about__visual">
            <div className="about__photo">
              <img className="object-cover [object-position:63%_center]" src="/site-assets/ad19fd96991d14e2.jpg" alt="Cão sendo recebido com carinho em uma loja pet" loading="lazy" />
            </div>
          </div>
          <div className="about__copy">
            <p className="eyebrow items-center gap-[9px] normal-case"> A gente acredita</p>
            <h2 id="about-title">Pet feliz.<br /><em>Tutor tranquilo.</em></h2>
            <p className="about__lead">A The Dog Shoppe é aquele lugar pertinho de casa onde seu pet é recebido com cuidado — e você, com toda a atenção.</p>
            <div className="about-points">
              <div className="about-point">
                <span className="about-point__icon place-items-center" aria-hidden="true">01</span>
                <div>
                  <h3>De vizinho pra vizinho</h3>
                  <p>Proximidade e praticidade para fazer parte da rotina de quem mora por aqui.</p>
                </div>
              </div>
              <div className="about-point">
                <span className="about-point__icon place-items-center" aria-hidden="true">02</span>
                <div>
                  <h3>Atendimento de verdade</h3>
                  <p>Uma conversa atenciosa para entender o que você e seu pet estão procurando.</p>
                </div>
              </div>
              <div className="about-point">
                <span className="about-point__icon place-items-center" aria-hidden="true">03</span>
                <div>
                  <h3>Um cantinho pet</h3>
                  <p>Cuidados e boas escolhas para acompanhar todas as fases e passeios.</p>
                </div>
              </div>
            </div>
            <a className={"\x74ext-link text-link--green items-center gap-[9px] isolate"} href="https://www.instagram.com/thedog.shoppe/" rel="noreferrer" target="_blank">Acompanhe no Instagram <span aria-hidden="true">↗</span></a>
          </div>
        </section>
        <ImportedSectionPassaAquiVaiSer />
      </main>
      <footer className="footer items-center grid-cols-[1fr_1fr]">
        <a className="brand brand--footer items-center gap-[10px]" href="#topo">
          <span className="brand__mark place-items-center" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <path d="M24 26.2c-4.3 0-9 4.1-9 8.5 0 3.6 3.4 5.2 7.1 4.1 1.2-.4 2.4-.4 3.6 0 3.8 1.1 7.2-.5 7.2-4.1 0-4.4-4.6-8.5-8.9-8.5Z" fill="currentColor" />
              <ellipse cx="11.4" cy="20.2" rx="4.1" ry="5.6" transform="rotate(-28 11.4 20.2)" fill="currentColor" />
              <ellipse cx="21.1" cy="14.4" rx="4.1" ry="5.6" transform="rotate(-8 21.1 14.4)" fill="currentColor" />
              <ellipse cx="31.4" cy="15.7" rx="4.1" ry="5.6" transform="rotate(12 31.4 15.7)" fill="currentColor" />
              <ellipse cx="39" cy="22.6" rx="4.1" ry="5.6" transform="rotate(33 39 22.6)" fill="currentColor" />
            </svg>
          </span>
          <span className="brand__type">
            <strong>the dog</strong>
            <small className="normal-case">SHOPPE · PET &amp; CARE</small>
          </span>
        </a>
        <p className="footer__signoff">Feito com carinho<br />pra quem ama de montão.</p>
        <div className="footer__bottom justify-between normal-case [grid-column:1/-1]">
          <span>© 2026 The Dog Shoppe</span>
          <span>Petshop de vizinhança · Brasília, DF</span>
          <a href="#topo">Voltar ao topo ↑</a>
        </div>
      </footer>
      <a className="whatsapp-float items-center gap-[9px] isolate [backdrop-filter:blur(14px)_saturate(160%)]" aria-label="Fale com a The Dog Shoppe pelo WhatsApp" href="https://wa.me/5561993351647?text=Ol%C3%A1%21%20Encontrei%20voc%C3%AAs%20pelo%20site." rel="noreferrer" target="_blank">
        <svg className="whatsapp-float__logo" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...({ focusable: "false" } as any)}>
          <path d="M20.52 3.48A11.84 11.84 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.93c0 2.1.55 4.15 1.59 5.96L0 24l6.26-1.64a11.96 11.96 0 0 0 5.78 1.47h.01c6.58 0 11.94-5.35 11.95-11.93a11.86 11.86 0 0 0-3.48-8.42ZM12.05 21.82a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.87 9.87 0 0 1-1.52-5.28c0-5.47 4.45-9.91 9.89-9.91 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 0 1 2.9 7.02c0 5.46-4.45 9.87-9.92 9.87Zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
        <span>WhatsApp</span>
      </a>
      <ImportedAsideEditWithLovable />
    </>
  );
}

function ImportedSectionALojaQueTemum() {
  return (
    <section className="shop items-center" id="loja" aria-labelledby="shop-title">
      <div className="shop__intro">
        <p className="eyebrow eyebrow--light items-center gap-[9px] justify-center normal-case"> Achadinhos de quatro patas</p>
        <h2 id="shop-title">A loja que tem<br />um pouco de <em>tudo</em><br />que é bom.</h2>
        <p>Uma seleção para acompanhar a rotina, o passeio e os momentos gostosos do seu pet.</p>
      </div>
      <div className="shop__categories items-start" aria-label="Categorias de produtos">
        <article className="category-card category-card--food aspect-square isolate">
          <img className="category-card__photo object-contain [object-position:center_bottom]" src="/site-assets/d217389e38cfb63f.webp" alt="Cão ao lado de um pote de ração, imagem ilustrativa da categoria alimentação" loading="lazy" />
          <div className="category-card__copy">
            <h3 className="uppercase">Alimentação</h3>
            <p>Escolhas para a rotina</p>
          </div>
        </article>
        <article className="category-card category-card--treat aspect-square isolate">
          <img className="category-card__photo object-contain [object-position:center_bottom]" src="/site-assets/6c7dd5d2698ad81e.webp" alt="Cão com um petisco, imagem ilustrativa da categoria petiscos" loading="lazy" />
          <div className="category-card__copy">
            <h3 className="uppercase">Petiscos</h3>
            <p>Pequenos mimos do dia</p>
          </div>
        </article>
        <article className="category-card category-card--play aspect-square isolate">
          <img className="category-card__photo object-contain [object-position:center_bottom]" src="/site-assets/bff9d7c9dc09d6ec.webp" alt="Cão com um brinquedo de bola, imagem ilustrativa da categoria brinquedos" loading="lazy" />
          <div className="category-card__copy">
            <h3 className="uppercase">Brinquedos</h3>
            <p>Diversão que movimenta</p>
          </div>
        </article>
        <article className="category-card category-card--walk aspect-square isolate">
          <img className="category-card__photo object-contain [object-position:center_bottom]" src="/site-assets/c182891ccc12c4ac.webp" alt="Cão usando peitoral e guia, imagem ilustrativa da categoria acessórios" loading="lazy" />
          <div className="category-card__copy">
            <h3 className="uppercase">Acessórios</h3>
            <p>Prontos pro passeio</p>
          </div>
        </article>
      </div>
      <a className="button button--cream shop__cta items-center gap-[18px] isolate justify-center" href="https://wa.me/5561993351647?text=Ol%C3%A1%21%20Quero%20conhecer%20os%20produtos%20da%20loja." rel="noreferrer" target="_blank">Pergunte o que tem na loja <span aria-hidden="true">↗</span></a>
    </section>
  );
}

function ImportedSectionPassaAquiVaiSer() {
  return (
    <section className="visit items-center" id="contato" aria-labelledby="visit-title">
      <div className="visit__copy">
        <p className="eyebrow eyebrow--light items-center gap-[9px] normal-case"> Estamos por aqui</p>
        <h2 id="visit-title">Passa aqui.<br /><em>Vai ser bom te ver.</em></h2>
        <p>Quer tirar uma dúvida sobre a loja, banho ou tosa? Manda uma mensagem — a gente conversa.</p>
        <a className="button button--cream items-center gap-[18px] isolate justify-center" href="https://wa.me/5561993351647?text=Ol%C3%A1%21%20Encontrei%20voc%C3%AAs%20pelo%20site." rel="noreferrer" target="_blank">Conversar no WhatsApp <span aria-hidden="true">↗</span></a>
      </div>
      <div className="visit__details">
        <div className="visit-detail [backdrop-filter:blur(4px)] [@media(width_<=_760px)]:items-center [@media(width_<=_760px)]:grid-cols-[40px_1fr]">
          <span className="visit-detail__icon place-items-center [@media(width_<=_760px)]:[grid-row:1/4]" aria-hidden="true">⌖</span>
          <div>
            <span className="visit-detail__label normal-case">Nosso cantinho</span>
            <p>CA 5, Bloco I,<br />lojas 107 e 108</p>
            <span className="visit-detail__sub">Brasília · DF</span>
          </div>
        </div>
        <div className="visit-detail [backdrop-filter:blur(4px)] [@media(width_<=_760px)]:items-center [@media(width_<=_760px)]:grid-cols-[40px_1fr]">
          <span className="visit-detail__icon place-items-center [@media(width_<=_760px)]:[grid-row:1/4]" aria-hidden="true">↗</span>
          <div>
            <span className="visit-detail__label normal-case">Manda um oi</span>
            <a href="https://wa.me/5561993351647" rel="noreferrer" target="_blank">(61) 99335-1647</a>
            <span className="visit-detail__sub">WhatsApp</span>
          </div>
        </div>
        <div className="visit-detail [backdrop-filter:blur(4px)] [@media(width_<=_760px)]:items-center [@media(width_<=_760px)]:grid-cols-[40px_1fr]">
          <span className="visit-detail__icon place-items-center [@media(width_<=_760px)]:[grid-row:1/4]" aria-hidden="true">◎</span>
          <div>
            <span className="visit-detail__label normal-case">Segue a gente</span>
            <a href="https://www.instagram.com/thedog.shoppe/" rel="noreferrer" target="_blank">@thedog.shoppe</a>
            <span className="visit-detail__sub">Instagram</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedAsideEditWithLovable() {
  return (
    <aside className="items-center normal-case! [will-change:transform,opacity]" id="lovable-badge" role="complementary" dir="ltr" lang="en" aria-label="Edit with Lovable"><a className="items-baseline [gap:var(--badge-gap)]" aria-label="Edit with Lovable" href="https://lovable.dev/projects/lovp_3w8vt65vdb9d7segfy8k97wpsy?utm_source=lovable-badge" id="lovable-badge-cta" rel="noopener nofollow" target="_blank">{"\n\t\t"}<span id="lovable-badge-text">Edit with</span>{"\n\t\t"}<span id="lovable-badge-logo"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="16" fill="none" viewBox="0 0 52 16">{"\n  "}<path fill="#FCFBF8" fillRule="evenodd" d="M20.318 5.25c.643 0 1.206.14 1.69.418a2.81 2.81 0 0 1 1.118 1.191c.266.513.4 1.115.4 1.807s-.134 1.296-.4 1.812a2.81 2.81 0 0 1-1.118 1.193c-.484.278-1.047.418-1.69.418s-1.208-.14-1.695-.418a2.85 2.85 0 0 1-1.125-1.193c-.262-.516-.393-1.12-.393-1.812s.131-1.294.393-1.807a2.848 2.848 0 0 1 1.125-1.191c.487-.279 1.052-.418 1.695-.418Zm0 1.425c-.27 0-.504.076-.7.228-.193.147-.34.37-.443.67-.102.295-.153.66-.153 1.093 0 .435.05.801.153 1.1.102.3.25.524.443.676.196.147.43.22.7.22.27 0 .502-.073.694-.22.193-.152.341-.375.443-.67.103-.299.153-.667.153-1.106 0-.65-.112-1.145-.337-1.481a1.08 1.08 0 0 0-.953-.51ZM32.7 5.25c.61 0 1.127.1 1.549.3.422.197.74.48.953.849.217.368.325.809.325 1.32v2.704c0 .29.02.562.062.812.044.245.108.4.19.466V12h-1.935a5.895 5.895 0 0 1-.105-.684 7.745 7.745 0 0 1-.02-.228 2.293 2.293 0 0 1-.151.203c-.205.242-.47.437-.793.584-.32.143-.685.215-1.094.215-.406 0-.77-.08-1.094-.24a1.845 1.845 0 0 1-.756-.682 1.984 1.984 0 0 1-.27-1.045c0-.606.178-1.069.535-1.388.356-.324.87-.534 1.542-.633l1.125-.16c.225-.032.403-.074.534-.123a.622.622 0 0 0 .288-.196.549.549 0 0 0 .093-.327.65.65 0 0 0-.11-.367.702.702 0 0 0-.32-.27c-.14-.07-.31-.105-.51-.105-.32 0-.576.083-.768.251-.193.164-.298.39-.314.676h-1.923c.016-.434.147-.82.393-1.155.25-.34.596-.604 1.039-.792.442-.189.954-.283 1.535-.283Zm.99 3.498a.98.98 0 0 1-.215.14 2.49 2.49 0 0 1-.584.178l-.473.092c-.315.061-.553.156-.713.283-.155.127-.233.305-.233.534 0 .23.084.412.252.547.168.135.383.203.645.203s.494-.058.694-.173c.201-.118.355-.282.461-.49.11-.21.166-.448.166-.714v-.6Zm4.526-2.375c.065-.125.138-.243.221-.349.197-.25.437-.44.719-.571.282-.135.6-.203.952-.203.528 0 .988.138 1.377.412.389.275.688.67.896 1.186.21.512.314 1.12.314 1.824 0 .7-.107 1.309-.32 1.825-.213.512-.518.906-.915 1.18-.393.275-.854.412-1.383.412-.352 0-.667-.062-.946-.184a1.832 1.832 0 0 1-.7-.554 2.2 2.2 0 0 1-.234-.383V12h-1.843V3h1.862v3.373Zm1.284.296c-.274 0-.51.085-.707.253-.192.163-.338.397-.436.7a3.376 3.376 0 0 0-.148 1.05c0 .406.05.759.148 1.058.098.299.243.53.436.694.197.164.433.246.707.246.279 0 .512-.082.7-.246.193-.164.336-.395.43-.694.099-.3.148-.652.148-1.058 0-.405-.05-.757-.147-1.056-.095-.299-.238-.53-.43-.694a1.015 1.015 0 0 0-.7-.253Zm9.416-1.419c.602 0 1.136.131 1.604.393.466.262.829.643 1.086 1.143.263.5.394 1.097.394 1.794 0 .25-.002.449-.006.596H47.51c.018.288.071.538.164.75a1.3 1.3 0 0 0 .491.596c.214.13.465.196.757.196.319 0 .583-.082.792-.246.209-.167.34-.403.393-.706h1.862a2.48 2.48 0 0 1-.485 1.235 2.54 2.54 0 0 1-1.051.805c-.439.188-.949.283-1.53.283-.655 0-1.225-.125-1.708-.375a2.672 2.672 0 0 1-1.13-1.143c-.267-.508-.4-1.137-.4-1.887 0-.712.14-1.327.418-1.843a2.86 2.86 0 0 1 1.155-1.186c.491-.27 1.051-.405 1.678-.405Zm-.044 1.345c-.274 0-.516.068-.725.203a1.29 1.29 0 0 0-.479.59 2.045 2.045 0 0 0-.132.498h2.562a1.873 1.873 0 0 0-.138-.602 1.061 1.061 0 0 0-.418-.516 1.243 1.243 0 0 0-.67-.173Z" clipRule="evenodd" />{"\n  "}<path fill="#FCFBF8" d="m26.605 9.995 1.342-4.566h1.924L27.628 12h-2.07l-2.33-6.57h1.98l1.397 4.565Zm-13.013.143h2.256c1.632 0 1.421 1.837 1.418 1.861h-5.603V3h1.93v7.138Zm31.516 1.861h-1.862V3h1.862v8.999Z" />{"\n  "}<path fill="url(#a)" fillRule="evenodd" d="M2.7 3c1.492 0 2.7 1.192 2.7 2.663v1.012h.9c1.49 0 2.7 1.192 2.7 2.662S7.791 12 6.3 12H0V5.663C0 4.193 1.209 3 2.7 3Z" clipRule="evenodd" />{"\n  "}<defs><radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="matrix(-1.54236 7.07838 -10.231 -2.15602 4.627 5.022)" gradientUnits="userSpaceOnUse"><stop offset=".106" stopColor="#FE7B02" /><stop offset=".394" stopColor="#FE3F21" /><stop offset=".608" stopColor="#F858BC" /><stop offset=".929" stopColor="#575ECF" /></radialGradient></defs>{"\n"}</svg>{"\n\n"}</span>{"\n\t"}</a><span id="lovable-badge-divider" aria-hidden="true" /><button className="items-center justify-center min-w-[24px]" id="lovable-badge-close" aria-label="Dismiss" title="Dismiss" type="button">{"\n\t\t"}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true">{"\n\t\t\t"}<path d="M10.646 4.646a.5.5 0 1 1 .707.708L8.707 8l2.646 2.646a.5.5 0 1 1-.707.707L8 8.707l-2.646 2.646a.5.5 0 1 1-.708-.707L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708L8 7.293l2.646-2.647Z" />{"\n\t\t"}</svg>{"\n\t"}</button></aside>
  );
}
