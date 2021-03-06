  var menu = document.createElement('div');
  menu.id = "menu";
  var links = [{label: 'Home', bg: '#2307ED', href: "./index.html"}, 
              {label: 'About', bg: '#0A12FA', href: "./about.html"}, 
              {label: 'Skills', bg: '#042CE0', href: "./skills.html"}, 
              {label: 'Projects', bg: '#0800F0', href: "./projects.html"}, 
              {label: 'Contact', bg: '#042DE0', href: "./contact.html"}, 
              ];
  var windowHeight = window.innerHeight/1.5;
  if(windowHeight === 0) windowHeight = 100;
  var radius = windowHeight*0.6,
      circle = document.createElement('div'),
      borderSize = radius*0.021;
      totalArea = 48, 
      increment = totalArea/(links.length-1),
      startPoint = 0-(totalArea/2.5),
      fontSize = radius*0.08,
      titleSize = radius*0.02,
      linkSize = radius*0.15,
      title =  document.createElement('div');

  document.body.appendChild(menu);
  styleTitle();
  addTtile();
  styleCircle();
  addCircle();
  addLinks();
  styleLinks();

  function styleTitle(){
      title.innerHTML = "Yu Wang";
      title.style.fontSize = titleSize+'vh';
      title.style.position = 'absolute';
      title.style.top = radius*0.11+'vh';
      title.style.left = 1 +'vw';
  }

  function addTtile(){
    menu.appendChild(title);
  }

  function styleCircle() {
    circle.style.border= borderSize+'px solid #fff';
    circle.style.width = radius*2+'px';
    circle.style.height = radius*2+'px';
    circle.style.borderRadius = radius+'px';
    circle.style.position = 'absolute';
    circle.style.top = '-'+radius*0.2+'px';
    circle.style.left = radius*-1+'px';
  }

  function addCircle() {
    menu.appendChild(circle);
  }

  function addLinks() {
    for (var i=0, l=links.length; i<l; i++) {
      link = document.createElement('a'),
      hover = document.createElement('span');
      link.dataset.color = links[i].bg;
      link.href = links[i].href;
      link.style.display = 'inline-block';
      link.style.textDecoration = 'none';
      link.style.color = '#E9E8ED';
      link.style.position = 'absolute';
      link.style.zIndex = 100;
      link.innerHTML = links[i].label;
      hover.style.position = 'absolute';
      hover.style.display = 'inline-block';
      hover.style.zIndex = 50;
      hover.style.opacity = 0;
      menu.appendChild(link);
      menu.appendChild(hover);
      link.addEventListener('mouseover', linkOver);
      link.addEventListener('mouseout', linkOut);
      links[i].elem = link;
      links[i].hover = hover;
    }
  }

  function styleLinks() {
    for (var i=0, l=links.length; i<l; i++) {
      var link = links[i].elem, hover = links[i].hover, deg = startPoint+(i*0.9*increment);  
      link.style.paddingLeft = radius*1.1+'px';
      link.style.fontSize = fontSize+'px';
      link.style.height = linkSize+'px';
      link.style.lineHeight = linkSize+'px';
      setTransformOrigin(link, '0px '+linkSize*0.8+'px');
      setTransition(link, 'all 0.2s ease-out');
      setTransform(link, 'rotate('+deg+'deg)');
      link.style.left = borderSize*0.2+'px';
      link.style.top = (windowHeight/2) - (windowHeight*0.1)+borderSize+'px';

      hover.style.left = borderSize+'px';
      setTransformOrigin(hover, '0px '+linkSize*0.6+'px');
      setTransition(hover, 'all 0.2s ease-out');
      setTransform(hover, 'rotate('+deg+'deg)');
      hover.style.top = (windowHeight*0.4)+borderSize +'px';
      hover.style.width = radius+(borderSize/2)+'px';
      hover.style.height = linkSize+'px';
      hover.style.borderRight = borderSize*2+'px solid #fff';
    
    }
  }

  window.onresize = function() {
    var windowHeight = window.innerHeight/1.5;
    radius = windowHeight*0.6,
    borderSize = radius*0.021;  
    fontSize = radius*0.08,
    linkSize = radius*0.15,
    styleCircle();
    styleLinks();
  }

  function linkOver(e) {
    var thisLink = e.target, thisHover = thisLink.nextSibling;
    thisLink.style.paddingLeft = radius*1.2+'px';
    thisHover.style.opacity = 1;
    document.body.style.backgroundColor = thisLink.dataset.color;
  }

  function linkOut(e) {
    var thisLink = e.target, thisHover = thisLink.nextSibling;
    thisLink.style.paddingLeft = radius*1.1+'px';
    thisHover.style.opacity = 0;
  }

  function setTransform(element, string) {
    element.style.webkitTransform = string;
    element.style.MozTransform = string;
    element.style.msTransform = string;
    element.style.OTransform = string;
    element.style.transform = string;
  }

  function setTransformOrigin(element, string) {
    element.style.webkitTransformOrigin = string;
    element.style.MozTransformOrigin = string;
    element.style.msTransformOrigin = string;
    element.style.OTransformOrigin = string;
    element.style.transformOrigin = string;
  }

  function setTransition(element, string) {
    element.style.webkitTransition = string;
    element.style.MozTransition = string;
    element.style.msTransition = string;
    element.style.OTransition = string;
    element.style.transition = string;
  }
