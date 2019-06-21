// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sudoku.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This text is printed from src/sudoku/core.cljs. Go ahead and edit it and see reloading in action."], 0));
sudoku.core.multiply = (function sudoku$core$multiply(a,b){
return (a * b);
});
sudoku.core.grid_size = (9);
sudoku.core.positions = (function sudoku$core$positions(){
var iter__4324__auto__ = (function sudoku$core$positions_$_iter__10408(s__10409){
return (new cljs.core.LazySeq(null,(function (){
var s__10409__$1 = s__10409;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10409__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__10409__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function sudoku$core$positions_$_iter__10408_$_iter__10410(s__10411){
return (new cljs.core.LazySeq(null,((function (s__10409__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__10411__$1 = s__10411;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__10411__$1);
if(temp__5457__auto____$1){
var s__10411__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10411__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10411__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10413 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10412 = (0);
while(true){
if((i__10412 < size__4323__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10412);
cljs.core.chunk_append(b__10413,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));

var G__10414 = (i__10412 + (1));
i__10412 = G__10414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10413),sudoku$core$positions_$_iter__10408_$_iter__10410(cljs.core.chunk_rest(s__10411__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10413),null);
}
} else {
var j = cljs.core.first(s__10411__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null),sudoku$core$positions_$_iter__10408_$_iter__10410(cljs.core.rest(s__10411__$2)));
}
} else {
return null;
}
break;
}
});})(s__10409__$1,i,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__10409__$1,i,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(sudoku.core.grid_size)));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,sudoku$core$positions_$_iter__10408(cljs.core.rest(s__10409__$1)));
} else {
var G__10415 = cljs.core.rest(s__10409__$1);
s__10409__$1 = G__10415;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(sudoku.core.grid_size));
});
sudoku.core.partial_puzzle = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(1),(0),(2),(3),(8),(4),(5),(6)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(3),(5),(0),(6),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6),(8),(0),(7),(9),(1),(2),(3)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(4),(3),(5),(7),(0),(9),(8)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(5),(6),(8),(9),(1),(2),(0),(7)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9),(6),(2),(4),(3),(1),(5)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3),(1),(7),(8),(5),(9),(6),(2)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(5),(0),(4),(2),(8),(3),(1)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(9),(2),(1),(6),(3),(5),(7),(4)], null)], null);
sudoku.core.puzzle = cljs.core.PersistentVector.fromArray([(0),(0),(4),(3),(0),(0),(2),(0),(9),(0),(0),(5),(0),(0),(9),(0),(0),(1),(0),(7),(0),(0),(6),(0),(0),(4),(3),(0),(0),(6),(0),(0),(2),(0),(8),(7),(1),(9),(0),(0),(0),(7),(4),(0),(0),(0),(5),(0),(0),(8),(3),(0),(0),(0),(6),(0),(0),(0),(0),(0),(1),(0),(5),(0),(0),(3),(5),(0),(8),(6),(9),(0),(0),(4),(2),(9),(1),(0),(3),(0),(0)], true);
sudoku.core.answer = cljs.core.PersistentVector.fromArray([(8),(6),(4),(3),(7),(1),(2),(5),(9),(3),(2),(5),(8),(4),(9),(7),(6),(1),(9),(7),(1),(2),(6),(5),(8),(4),(3),(4),(3),(6),(1),(9),(2),(5),(8),(7),(1),(9),(8),(6),(5),(7),(4),(3),(2),(2),(5),(7),(4),(8),(3),(9),(1),(6),(6),(8),(9),(7),(3),(4),(1),(2),(5),(7),(1),(3),(5),(2),(8),(6),(9),(4),(5),(4),(2),(9),(1),(6),(3),(7),(8)], true);
sudoku.core.init_matrix = (function sudoku$core$init_matrix(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,sudoku.core.positions(),cljs.core.flatten(sudoku.core.puzzle)));
});
sudoku.core.board = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(sudoku.core.init_matrix());
sudoku.core.cell_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
sudoku.core.val_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
sudoku.core.rect_cell = (function sudoku$core$rect_cell(p__10416){
var vec__10417 = p__10416;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10417,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10417,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect$cell,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x,(0.05 + x),cljs.core.cst$kw$width,0.9,cljs.core.cst$kw$y,(0.05 + y),cljs.core.cst$kw$height,0.9,cljs.core.cst$kw$fill,"white",cljs.core.cst$kw$stroke_DASH_width,0.025,cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$on_DASH_click,((function (vec__10417,x,y){
return (function sudoku$core$rect_cell_$_click_square(e){
return cljs.core.reset_BANG_(sudoku.core.cell_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(vec__10417,x,y))
], null)], null);
});
sudoku.core.text_cell = (function sudoku$core$text_cell(app_state,p__10420){
var vec__10421 = p__10420;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10421,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10421,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,(0.5 + x),cljs.core.cst$kw$width,(1),cljs.core.cst$kw$y,(0.72 + y),cljs.core.cst$kw$height,(1),cljs.core.cst$kw$text_DASH_anchor,"middle",cljs.core.cst$kw$font_DASH_size,0.6], null),((((0) < cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)):null)], null);
});
sudoku.core.render_board = (function sudoku$core$render_board(app_state){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg$board,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$view_DASH_box,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sudoku.core.grid_size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sudoku.core.grid_size)].join(''),cljs.core.cst$kw$shape_DASH_rendering,"auto",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_height,"500px"], null)], null)], null),(function (){var iter__4324__auto__ = (function sudoku$core$render_board_$_iter__10424(s__10425){
return (new cljs.core.LazySeq(null,(function (){
var s__10425__$1 = s__10425;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10425__$1);
if(temp__5457__auto__){
var s__10425__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10425__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10425__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10427 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10426 = (0);
while(true){
if((i__10426 < size__4323__auto__)){
var vec__10428 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10426);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10428,(0),null);
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10428,(1),null);
cljs.core.chunk_append(b__10427,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sudoku.core.rect_cell,pos], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sudoku.core.text_cell,app_state,pos], null)], null));

var G__10434 = (i__10426 + (1));
i__10426 = G__10434;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10427),sudoku$core$render_board_$_iter__10424(cljs.core.chunk_rest(s__10425__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10427),null);
}
} else {
var vec__10431 = cljs.core.first(s__10425__$2);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10431,(0),null);
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10431,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sudoku.core.rect_cell,pos], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sudoku.core.text_cell,app_state,pos], null)], null),sudoku$core$render_board_$_iter__10424(cljs.core.rest(s__10425__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(app_state);
})());
});
sudoku.core.input_field = (function sudoku$core$input_field(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Enter value: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sudoku.core.cell_input),cljs.core.deref(sudoku.core.board)),cljs.core.cst$kw$on_DASH_change,(function (p1__10435_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sudoku.core.board,cljs.core.assoc,cljs.core.deref(sudoku.core.cell_input),parseInt(p1__10435_SHARP_.target.value));
})], null)], null)], null)], null);
});
});
sudoku.core.attempt = (function sudoku$core$attempt(state){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4324__auto__ = (function sudoku$core$attempt_$_iter__10436(s__10437){
return (new cljs.core.LazySeq(null,(function (){
var s__10437__$1 = s__10437;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10437__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__10437__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function sudoku$core$attempt_$_iter__10436_$_iter__10438(s__10439){
return (new cljs.core.LazySeq(null,((function (s__10437__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__10439__$1 = s__10439;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__10439__$1);
if(temp__5457__auto____$1){
var s__10439__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10439__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10439__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10441 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10440 = (0);
while(true){
if((i__10440 < size__4323__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10440);
cljs.core.chunk_append(b__10441,cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null)));

var G__10442 = (i__10440 + (1));
i__10440 = G__10442;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10441),sudoku$core$attempt_$_iter__10436_$_iter__10438(cljs.core.chunk_rest(s__10439__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10441),null);
}
} else {
var j = cljs.core.first(s__10439__$2);
return cljs.core.cons(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null)),sudoku$core$attempt_$_iter__10436_$_iter__10438(cljs.core.rest(s__10439__$2)));
}
} else {
return null;
}
break;
}
});})(s__10437__$1,i,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__10437__$1,i,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(sudoku.core.grid_size)));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,sudoku$core$attempt_$_iter__10436(cljs.core.rest(s__10437__$1)));
} else {
var G__10443 = cljs.core.rest(s__10437__$1);
s__10437__$1 = G__10443;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(sudoku.core.grid_size));
})());
});
sudoku.core.win_QMARK_ = (function sudoku$core$win_QMARK_(state){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sudoku.core.answer,sudoku.core.attempt(state));
});
sudoku.core.sudoku = (function sudoku$core$sudoku(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Enter for cell ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sudoku.core.cell_input))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sudoku.core.input_field], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sudoku.core.render_board,cljs.core.deref(sudoku.core.board)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Win? = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sudoku.core.win_QMARK_(cljs.core.deref(sudoku.core.board)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Because ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sudoku.core.attempt(cljs.core.deref(sudoku.core.board))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(sudoku.core.win_QMARK_(cljs.core.deref(sudoku.core.board)))?" equals ":" does not equal ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sudoku.core.answer)].join('')], null)], null);
});
sudoku.core.get_app_element = (function sudoku$core$get_app_element(){
return goog.dom.getElement("app");
});
sudoku.core.mount = (function sudoku$core$mount(el){
var G__10444 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sudoku.core.sudoku], null);
var G__10445 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__10444,G__10445) : reagent.core.render_component.call(null,G__10444,G__10445));
});
sudoku.core.mount_app_element = (function sudoku$core$mount_app_element(){
var temp__5457__auto__ = sudoku.core.get_app_element();
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return sudoku.core.mount(el);
} else {
return null;
}
});
sudoku.core.mount_app_element();
sudoku.core.on_reload = (function sudoku$core$on_reload(){
return sudoku.core.mount_app_element();
});
