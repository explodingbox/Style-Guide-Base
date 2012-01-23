initStyleGuide = (function(){  
  $$('button').each(function(el){
    new Button(el);
  });
  $$('.tabset').each(function(el){
    new Tabset(el);
  });
  $$('select.segmented').each(function(el){
    new SegmentedSelect(el);
  });
  $$('input[type=range]').each(function(el){
    new RangeSlider(el);
  });
  var cs = $('sel_color_scheme');
  cs.addEvent('change', function(e,el){
    document.body.set('class',cs.get('value'));
  });
  window.addEvent('keydown', function(e){
    if (e.key == 'down') {
      e.preventDefault();
      e.stopPropagation();
      document.body.toggleClass("reversed");
    }
  })
});

window.addEvent('domready',initStyleGuide);