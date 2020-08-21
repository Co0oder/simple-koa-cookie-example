const CHARACTERS = {
    'alien': '👽',
    'panda': '🐼',
    'unicorn': '🦄',
    'human': '🙍🏾‍♂️'
}

exports.index =  ctx => {
    let character = ctx.cookies.get('character');
    if( !character ) character = "humen";
    let c = new Array(100).fill(CHARACTERS[character]).join(`${character}'s LIVES MATTER `);
    let ico = '👩🏾‍🚀'
    return ctx.render('index', {character: c, ico: ico} );   
}

exports.show =  ctx => {
    let c = new Array(100).fill('👽').join('\'S LIVES MATTER ');
    let panda = '🐼';
    let ico = '👩🏾‍🚀'
    return ctx.render('form', {characters: CHARACTERS, ico: ico} );
}

exports.update = ctx =>{
    let params = ctx.request.body;
    ctx.cookies.set('character', params.character , { signed: true });
    ctx.redirect('/');
}
