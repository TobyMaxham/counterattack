(function(q,u,a,d) {
	
	var CounterAttack = function() {
		return new CounterAttack.fn.init();
	};
	
	CounterAttack.fn = CounterAttack = {

		// Current Version
		version: d,

		// Window Console
		cn: q.console,

		// The Developer
		author: [
			'Tobias Maxham <tobias@maxham.de>',
			'Tim Schwarz <tikaykhan@gmail.com>'
		],



		// Generates the Card Deck
		shuffle: function(aR) {
			var cI=aR.length,tV,rI;while(0!==cI){
			rI=Math.floor(Math.random()*cI);cI-=1;
			tV=aR[cI];aR[cI]=aR[rI];aR[rI]=tV;}return aR;
		},



		size: 120,
		deck: [],
		depo: [],
		user: [],

		init: function() {

			var deck=[], i=0;
			a(this.cards).each(function(al,b){
				deck[i] = [b+"h",CounterAttack.mc("h",b)];i+=1;
				deck[i] = [b+"d",CounterAttack.mc("d",b)];i+=1;
				deck[i] = [b+"s",CounterAttack.mc("s",b)];i+=1;
				deck[i] = [b+"c",CounterAttack.mc("c",b)];i+=1;
			});

			deck[i] = ["jh",CounterAttack.mc("jr","joker")];i+=1;
			deck[i] = ["jd",CounterAttack.mc("jr","joker")];i+=1;
			deck[i] = ["js",CounterAttack.mc("jb","joker")];i+=1;

			this.deck = this.shuffle(deck);
		},

		mc: function(l,m) {
			return Poker.getCardData(this.size,this.m(l),m);
		},

		aDep: function(al) {
			this.depo[this.depo.length] = al;
			a('#depo').attr('src', al[1]);
		},

		rDec: function(q) {
			var i=this.deck.indexOf(q);
			if(i>-1)this.deck.splice(i,1);
		},

		deal: function(usr, tra) {
			this.init(); var i= 0, xc=usr;
			while(tra>0) {
				for(var c=0;c<xc;c++) {
					if(typeof(this.user[c])==='undefined') this.user[c]=[];
					this.user[c].push(this.deck[i]);
					this.rDec(this.deck[i]);
				}
				tra-=1;
				xc=usr;
			}

			this.aDep(this.deck[i]);
			this.rDec(this.deck[i]);
		},



		// Standard Functions
		log: function (txt) {
			this.cn.log(txt);
		},
		info: function (txt) {
			this.cn.info(txt);
		},
		error: function (txt) {
			this.cn.error(txt);
		},




		m: function(d) {
		  switch (d) {
			  case "h": return "hearts";
			  case "d": return "diamonds";
			  case "s": return "spades";
			  case "c": return "clubs";
			  case "jr": return "hearts";
			  case "jb": return "spades";
			  default: return "back";
		  }
		},

		// CA Cards
		cards: ["a",2,3,4,5,6,7,8,9,10,"j","q","k"]



		
		
	
	};
	

	
	q.CA = CounterAttack;
	

})(window, document, jQuery, '0.0.1');	