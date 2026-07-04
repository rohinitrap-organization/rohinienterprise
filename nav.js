(function(){
  const P=[
    {href:'index.html',id:'home',label:'Home'},
    {href:'products.html',id:'products',label:'Products'},
    {href:'about.html',id:'about',label:'About'},
    {href:'quality.html',id:'quality',label:'Quality'},
    {href:'contact.html',id:'contact',label:'Inquire'},
  ];

  /* ══ Exact vector logo extracted from CDR — "re · A Quality Tarp" ══ */
  const LOGO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3428 8556 4280 4480" height="44" aria-label="Rohini Enterprise — A Quality Tarp" role="img">
    <path fill="#102A83" d="M 5599,9231 L 5570,9231 C 5484,9212 5403,9197 5323,9188 5244,9179 5151,9175 5041,9175 4866,9175 4697,9215 4535,9293 4371,9372 4215,9474 4064,9599 L 4064,12027 3497,12027 3497,8604 4064,8604 4064,9109 C 4289,8925 4487,8795 4660,8719 4831,8642 5007,8604 5187,8604 5285,8604 5356,8606 5400,8611 5444,8616 5511,8625 5599,8640 L 5599,9231 Z"/>
    <path fill="#009035" d="M 7700,10346 L 5317,10346 C 5317,10546 5347,10722 5407,10871 5466,11021 5548,11144 5653,11240 5753,11333 5872,11403 6009,11450 6148,11498 6301,11521 6467,11521 6686,11521 6907,11477 7130,11387 7352,11298 7511,11210 7606,11122 L 7635,11122 7635,11726 C 7452,11805 7264,11870 7074,11923 6883,11976 6683,12002 6473,12002 5936,12002 5518,11855 5218,11561 4917,11267 4767,10847 4767,10305 4767,9770 4911,9343 5199,9029 5487,8714 5866,8557 6337,8557 6774,8557 7109,8686 7345,8944 7581,9203 7700,9570 7700,10046 L 7700,10346 Z M 7173,9924 C 7171,9635 7098,9410 6956,9252 6815,9093 6599,9014 6310,9014 6016,9014 5784,9101 5612,9275 5439,9451 5341,9666 5317,9924 L 7173,9924 Z"/>
    <path fill="#1B1918" d="M 3827,12901 L 3763,12901 3712,12753 3525,12753 3480,12901 3428,12901 3591,12397 3663,12397 3827,12901 Z M 3699,12706 L 3621,12464 3543,12706 3699,12706 Z M 4254,12912 C 4190,12912 4140,12887 4103,12837 4067,12787 4048,12726 4048,12653 4048,12575 4067,12510 4105,12460 4143,12411 4193,12387 4254,12387 4314,12387 4363,12410 4402,12457 4441,12504 4460,12568 4460,12645 4460,12709 4445,12766 4417,12814 4388,12862 4351,12893 4306,12905 L 4306,12912 C 4306,12949 4328,12967 4372,12967 4393,12967 4413,12966 4430,12963 L 4430,13013 C 4413,13018 4396,13021 4378,13021 4339,13021 4310,13012 4289,12996 4268,12980 4257,12952 4254,12912 Z M 4254,12859 C 4298,12859 4332,12839 4357,12799 4382,12759 4394,12708 4394,12644 4394,12580 4382,12528 4356,12492 4330,12456 4296,12438 4254,12438 4211,12438 4177,12457 4152,12496 4126,12535 4114,12588 4114,12651 4114,12712 4126,12763 4152,12801 4177,12840 4212,12859 4254,12859 Z M 4841,12901 L 4789,12901 4789,12829 C 4763,12884 4723,12912 4671,12912 4633,12912 4603,12899 4582,12874 4560,12848 4549,12812 4549,12766 L 4549,12528 4606,12528 4606,12766 C 4606,12803 4614,12828 4629,12842 4645,12856 4662,12863 4680,12863 4699,12863 4716,12858 4731,12847 4746,12837 4759,12822 4769,12802 4779,12782 4784,12761 4784,12738 L 4784,12528 4841,12528 4841,12901 Z M 5247,12901 L 5190,12901 C 5188,12889 5186,12866 5183,12833 5158,12886 5114,12912 5053,12912 5011,12912 4979,12900 4957,12878 4935,12855 4924,12829 4924,12798 4924,12760 4940,12729 4971,12705 5003,12681 5057,12669 5134,12669 5144,12669 5161,12669 5183,12670 5183,12641 5181,12620 5176,12607 5172,12594 5162,12583 5148,12575 5133,12567 5114,12564 5090,12564 5031,12564 4997,12586 4988,12631 L 4934,12621 C 4947,12553 5002,12517 5098,12517 5149,12517 5185,12529 5207,12552 5228,12575 5239,12614 5239,12670 L 5239,12828 C 5239,12854 5242,12879 5247,12901 Z M 5183,12715 C 5160,12713 5142,12713 5130,12713 5084,12713 5049,12720 5023,12735 4998,12750 4985,12772 4985,12801 4985,12819 4992,12834 5006,12847 5019,12860 5039,12866 5065,12866 5099,12866 5128,12853 5150,12828 5173,12803 5184,12773 5184,12739 5184,12732 5184,12724 5183,12715 Z M 5412,12901 L 5355,12901 5355,12397 5412,12397 5412,12901 Z M 5589,12397 L 5589,12461 5526,12461 5526,12397 5589,12397 Z M 5586,12528 L 5586,12901 5528,12901 5528,12528 5586,12528 Z M 5870,12861 L 5870,12908 C 5850,12910 5832,12912 5817,12912 5745,12912 5709,12874 5709,12798 L 5709,12574 5644,12574 5644,12528 5709,12528 5711,12435 5766,12429 5766,12528 5849,12528 5849,12574 5766,12574 5766,12807 C 5766,12846 5786,12865 5825,12865 5839,12865 5854,12863 5870,12861 Z M 6188,12528 L 6039,12945 C 6017,13004 5983,13034 5935,13034 5920,13034 5904,13032 5886,13027 L 5886,12981 C 5901,12985 5913,12987 5924,12987 5943,12987 5958,12981 5970,12971 5983,12960 5995,12935 6008,12894 L 5879,12528 5938,12528 6037,12808 6138,12528 6188,12528 Z M 6590,12901 L 6527,12901 6527,12452 6383,12452 6383,12397 6734,12397 6734,12452 6590,12452 6590,12901 Z M 7040,12901 L 6982,12901 C 6980,12889 6978,12866 6976,12833 6950,12886 6907,12912 6845,12912 6804,12912 6772,12900 6749,12878 6727,12855 6716,12829 6716,12798 6716,12760 6732,12729 6764,12705 6796,12681 6850,12669 6926,12669 6937,12669 6953,12669 6976,12670 6976,12641 6973,12620 6969,12607 6964,12594 6955,12583 6940,12575 6925,12567 6906,12564 6882,12564 6823,12564 6789,12586 6780,12631 L 6726,12621 C 6739,12553 6794,12517 6890,12517 6941,12517 6978,12529 6999,12552 7021,12575 7031,12614 7031,12670 L 7031,12828 C 7031,12854 7034,12879 7040,12901 Z M 6976,12715 C 6952,12713 6934,12713 6922,12713 6876,12713 6841,12720 6816,12735 6790,12750 6778,12772 6778,12801 6778,12819 6784,12834 6798,12847 6812,12860 6831,12866 6857,12866 6892,12866 6920,12853 6943,12828 6965,12803 6976,12773 6976,12739 6976,12732 6976,12724 6976,12715 Z M 7204,12901 L 7147,12901 7147,12528 7197,12528 7197,12616 C 7215,12575 7233,12548 7251,12536 7270,12523 7288,12517 7307,12517 7313,12517 7321,12518 7330,12519 L 7330,12575 7318,12575 C 7286,12575 7259,12587 7238,12610 7217,12634 7206,12665 7204,12704 L 7204,12901 Z M 7449,13027 L 7391,13027 7391,12528 7443,12528 7443,12600 C 7470,12545 7509,12517 7560,12517 7604,12517 7640,12536 7666,12574 7693,12610 7707,12657 7707,12713 7707,12773 7693,12822 7665,12857 7638,12894 7602,12912 7559,12912 7512,12912 7475,12889 7449,12844 L 7449,13027 Z M 7449,12660 L 7449,12766 C 7452,12794 7464,12817 7484,12836 7504,12854 7525,12863 7547,12863 7572,12863 7595,12852 7614,12830 7634,12808 7644,12770 7644,12715 7644,12669 7635,12632 7617,12607 7599,12582 7576,12569 7547,12569 7524,12569 7503,12578 7485,12596 7467,12613 7455,12635 7449,12660 Z"/>
  </svg>`;

  /* Same paths — tagline recoloured to champagne gold for dark backgrounds */
  const LOGO_DARK = LOGO.replace('fill="#1B1918"','fill="#C8A84B"');

  const ADDR = `Sumel Business Park-VI, H Block 309/10/11,<br>3rd Floor, Tavdipura Road, Dudheshwar,<br>Ahmedabad – 380004, Gujarat, India`;

  function nav(a){return`
<nav class="site-nav">
  <div class="container nav-inner">
    <a href="index.html" class="brand" style="gap:12px">
      ${LOGO_DARK}
      <div style="display:flex;flex-direction:column;gap:1px">
        <span class="brand-title">Rohini Enterprise</span>
        <span class="brand-sub">7 Horses · International Division</span>
      </div>
    </a>
    <div class="nav-links" id="nL">
      ${P.map(p=>`<a href="${p.href}"${p.id===a?' class="act"':''}>${p.label}</a>`).join('')}
    </div>
    <div class="nav-r">
      <a href="contact.html" class="btn btn-gold btn-sm"><span class="hm">Request Quote </span><svg class="arrow" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9h12M10 4l5 5-5 5"/></svg></a>
      <button class="nav-tog" id="nT" aria-label="Menu" aria-expanded="false"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="2" y1="5" x2="18" y2="5"/><line x1="2" y1="10" x2="18" y2="10"/><line x1="2" y1="15" x2="18" y2="15"/></svg></button>
    </div>
  </div>
</nav>`;}

  function foot(){return`
<footer class="foot">
  <div class="container">
    <div class="foot-grid">
      <div>
        <a href="index.html" class="brand" style="gap:12px">
          ${LOGO_DARK}
          <div><span class="brand-title">Rohini Enterprise</span><span class="brand-sub">7 Horses · International</span></div>
        </a>
        <p class="foot-p">Manufacturer &amp; exporter of HDPE tarpaulins, PP woven sacks, grow bags, azolla beds and vermibeds. Ahmedabad, Gujarat, India. Supplying importers in 50+ countries.</p>
        <div class="foot-chips"><span class="foot-chip">rohinienterprise.com</span><span class="foot-chip">seven-horses.com</span><span class="foot-chip">50+ Countries</span></div>
      </div>
      <div><div class="foot-h">Products</div><ul class="foot-col">
        <li><a href="products.html#tarp">HDPE Tarpaulins</a></li>
        <li><a href="products.html#pp">PP Woven Sacks &amp; Fabric</a></li>
        <li><a href="products.html#rgb">Rectangle Grow Bags</a></li>
        <li><a href="products.html#cgb">Round Grow Bags</a></li>
        <li><a href="products.html#azolla">Azolla Beds</a></li>
        <li><a href="products.html#vermi">Vermibeds</a></li>
        <li><a href="products.html#nursery">Nursery Bags</a></li>
      </ul></div>
      <div><div class="foot-h">Company</div><ul class="foot-col">
        <li><a href="about.html">About Rohini Enterprise</a></li>
        <li><a href="about.html">7 Horses Brand</a></li>
        <li><a href="quality.html">Quality &amp; Testing</a></li>
        <li><a href="about.html#reach">Global Reach</a></li>
        <li><a href="contact.html">Export Inquiry</a></li>
        <li><a href="https://www.seven-horses.com" target="_blank">D2C: seven-horses.com</a></li>
      </ul></div>
      <div><div class="foot-h">Contact</div><ul class="foot-col">
        <li><a href="tel:+919409914704">+91 94099 14704</a></li>
        <li><a href="https://wa.me/919409914704" target="_blank">WhatsApp Export Desk</a></li>
        <li><a href="mailto:inquiry@rohinienterprise.com">inquiry@rohinienterprise.com</a></li>
        <li style="color:var(--td4);font-size:.77rem;line-height:1.6;margin-top:6px">${ADDR}</li>
        <li style="margin-top:8px"><a href="https://maps.app.goo.gl/KC4FAs5e8JBiemq79" target="_blank" rel="noopener" style="font-size:.76rem;color:var(--g2)">📍 Office on Google Maps</a></li>
        <li><a href="https://maps.app.goo.gl/PcbKVkduZ7RgU7NP9" target="_blank" rel="noopener" style="font-size:.76rem;color:var(--g2)">🏭 Factory on Google Maps</a></li>
      </ul></div>
    </div>
    <div class="foot-bottom"><span>© 2026 Rohini Enterprise · 7 Horses is a registered brand. All rights reserved.</span><span style="font-family:var(--fm);font-size:.66rem">HDPE / PP Manufacturer · GST Registered · Ahmedabad, Gujarat, India</span></div>
  </div>
</footer>`;}

  function reveal(){
    const els=document.querySelectorAll('.rv,.rv-l');
    if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return;}
    const ob=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');ob.unobserve(x.target);}});},{threshold:.07,rootMargin:'0px 0px -44px 0px'});
    els.forEach(e=>ob.observe(e));
  }

  window.injectShell=function(active){
    const nr=document.getElementById('nav-root'),fr=document.getElementById('footer-root');
    if(nr)nr.innerHTML=nav(active);
    if(fr)fr.innerHTML=foot();
    const t=document.getElementById('nT'),l=document.getElementById('nL');
    if(t&&l){t.addEventListener('click',()=>{const o=l.classList.toggle('open');t.setAttribute('aria-expanded',o);});l.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{l.classList.remove('open');t.setAttribute('aria-expanded','false');}));}
    reveal();
    document.querySelectorAll('.faq-q').forEach(q=>q.addEventListener('click',()=>{const it=q.parentElement,was=it.classList.contains('open');document.querySelectorAll('.faq').forEach(f=>f.classList.remove('open'));if(!was)it.classList.add('open');}));
  };
})();
