/* 元のURL: https://booking.com */
booking.jstmpl('searchbox_number_of_nights', (function () { var T = ["","\n","/private/sbox_dates_num_nights_1/name"], V = ["b_interval","b_lang"], WV, LV, VA; return function (VS) { var s = '', r = this.fn; function searchbox_partial_length_of_stay_string_inc1(s) { s += [ T[1], '', T[1],         ( VS.unshift({'num_nights': r.MC(V[0])}), (VA = r.ME(T[2], r.MB, r.MN, r.MO(r.MC(V[0]), null, T[2]))), VS.shift(), VA ) , T[1], '' ].join( '' ); return s; } s += T[0]; { VS.unshift({'b_interval': r.MC(V[0]), 'b_lang': r.MC(V[1])}); s = searchbox_partial_length_of_stay_string_inc1(s); VS.shift(); } return s; }; } )());


