(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),A=a.n(n),r=a(147),i=a(155),c=(a(171),a(173)),o=a.n(c),s=a(174),d=a.n(s),l=a(175),u=a.n(l),g=a(176),m=a.n(g),f=a(177),p=a.n(f);t.default=function(){return A.a.createElement(i.a,{className:"home"},A.a.createElement("img",{className:"titleImage",src:o.a,alt:"Ardynia Title Screen"}),A.a.createElement("p",null,"Explore dungeons, solve puzzles, fight bosses, all from your pocket. Ardynia is an upcoming adventure game for the Arduboy. Checkout the"," ",A.a.createElement(r.Link,{to:"/updates"},"updates page")," for the latest."),A.a.createElement("div",{className:"mediaContainer"},A.a.createElement("video",{className:"crossWater",src:d.a,muted:!0,width:"256",height:"128",autoPlay:!0,loop:!0,playsinline:!0,controls:!0}),A.a.createElement("div",{className:"divider"}),A.a.createElement("video",{className:"goIntoDungeon",src:u.a,muted:!0,width:"256",height:"128",autoPlay:!0,loop:!0,playsinline:!0,controls:!0}),A.a.createElement("img",{className:"inGameMenu",src:m.a,alt:"in game menu"}),A.a.createElement("img",{className:"attackBlob",src:p.a,alt:"in game menu"})),A.a.createElement("p",null,"The game will be free and open source when released.",A.a.createElement("br",null),"©2018 Matt Greer"))}},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return g}),a.d(t,"StaticQuery",function(){return m});var n=a(0),A=a.n(n),r=a(8),i=a.n(r),c=a(146),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(34);a.d(t,"waitForRouteChange",function(){return s.c});var d=a(148),l=a.n(d);a.d(t,"PageRenderer",function(){return l.a});var u=a(35);a.d(t,"parsePath",function(){return u.a});var g=A.a.createContext({}),m=function(e){return A.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):A.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Ardynia",keywords:"Arduboy, game, zelda style, adventure",description:"An adventure game for the Arduboy in the style of Zelda",twitterHandle:"@mattegreer"}}}}},150:function(e,t,a){"use strict";a.r(t);var n=a(0),A=a.n(n),r=a(8),i=a.n(r),c=a(36),o=a(1),s=function(e){var t=e.location,a=o.default.getResourcesForPathname(t.pathname);return A.a.createElement(c.a,{location:t,pageResources:a})};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},151:function(e,t,a){},153:function(e,t,a){},155:function(e,t,a){"use strict";var n=a(149),A=a(0),r=a.n(A),i=a(156),c=a.n(i),o=a(8),s=a.n(o),d=a(157),l=a.n(d),u=a(147),g=(a(50),a(151),["updates","contact"]),m=function(e){return e.siteTitle,r.a.createElement("nav",{className:"header"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.Link,{to:"/"},"home")),g.map(function(e){return r.a.createElement("li",null,r.a.createElement(u.Link,{to:"/"+e},e))})))},f=(a(153),function(e){var t=e.className,a=e.children,A=c()("layout",t);return r.a.createElement(u.StaticQuery,{query:"2840028964",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.title},{name:"keywords",content:e.site.siteMetadata.keywords},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:e.site.siteMetadata.twitterHandle},{name:"twitter:title",content:e.site.siteMetadata.title},{name:"twitter:description",content:e.site.siteMetadata.description},{name:"twitter:image",content:"http://www.ardynia.com/title.png"},{name:"og:title",content:e.site.siteMetadata.title},{name:"og:type",content:"website"},{name:"og:url",content:"http://www.ardynia.com"},{name:"og:description",content:e.site.siteMetadata.description},{name:"og:image",content:"http://www.ardynia.com/title.png"},{name:"og:title",content:e.site.siteMetadata.title}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{className:"layoutContainer"},r.a.createElement("div",{className:A},a)))},data:n})});f.propTypes={children:s.a.node.isRequired},t.a=f},171:function(e,t,a){},173:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAABhCAYAAABSzKQUAAACSElEQVR4nO3dUU7DQAwE0A3i/lcuv4AqhWh3xw557wAkrTpyBiftMcZ4DSDms/oEYNbrdW1uHMex6Uz+5qP06PBAQgdhQgdhx/CPFG7maoc7k+54Jh2ECR2ECR2E6XS0N7uH67bHM+kgTOggTOggTKejnd0drLrjmXQQJnQQJnQQ5nk6bme2Y83u8WaZdBAmdBAmdBCm03E7vzvY7j3daiYdhAkdhAkdhL2993L2mvfsGnv3NXW3a/zV57P7/e32PFq35+lm/55JB2FCB2FCB2GfY9TvLVab3eOs1u18dlv9eq92tOoOesakgzChgzChg7C3917O7ilmr+lX70n+2/k8XfUecbZjmnQQJnQQJnQQ5nk6tjvrsNV7vTSTDsKEDsKEDsJ0uobSnaTbnrB6j7n7+CYdhAkdhAkdhOl0N9Rt73TV3c9/lkkHYUIHYUIHYTody3W/97GaSQdhQgdhQgdhbztd9TX46uN3u7fwqtUd6e7vR9rqz6NJB2FCB2FCB2GP2NNVP5/1dPZ2P5l0ECZ0ECZ0ELbltwxmVR8fvlv9eTTpIEzoIEzoIOwRe7pZ7gVda/dvGXRn0kGY0EGY0EGYThfw3zvKrKe9PyYdhAkdhAkdhB1jDDcycmtX96jVHdKkgzChgzChgzB7OsqddbLqDraaSQdhQgdhQgdhOh3tze7hun2njkkHYUIHYUIHYe69pJ3q71XdzaSDMKGDMKGDMHs6yu3+XlF7Ong4oYMwoYMwnY72rv4+XLcO95tJB2FCB2FCB2FfjzHB0JGJLtQAAAAASUVORK5CYII="},174:function(e,t,a){e.exports=a.p+"static/crossWater-a03d9bde90b64fbf538432dfaa4f8579.mp4"},175:function(e,t,a){e.exports=a.p+"static/goIntoDungeon-f37d1fefb5c468ee725f78eeb695593f.mp4"},176:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACACAYAAADktbcKAAAEEElEQVR4nO3d23abMBAFUNPV//9l+sRDWCWSkQCJs/dbQmo7l84cixEsn89n/QxsXX9/ecuynPq67eP985Qe7+jflZ63l6t+HqWv453+PP0CgOf8ffoFnHXUmb7t0KXHP0oMVz1vrbMdvFeyoa+jBHr1xxIABJsmAXz7XvTuDvZUxywlgdrXpeOPofR76H1cAoBg0ySA3u9dv62UpbWAUVfLz64BcK/SmtNVxyUACLZ8Bp8DAK4jAUAwBQAGsK7rj/WZ/cdXUQAg2PBnAWY5P33XKvosP4/eUs5S3P37lQAg2PAJYDNqB3h6AvDtUhLPt3tPepEAINg0CYBrlCYDTQ7e6+6fqwQAwaZNALXvDUsVtdfjvF3t9QeYiwQAwaZNAJvW3YC1nf3u1dnR6PzvJAFAsNsSwL6DXHW13Nor5KR28r1vr3XIu0gAEOzyBFDbmVv1evy0895p3y8/SQAQ7LIEcPd77dakYW2AJz01jyIBQLDuCaD23nu9mVTjDe6+Q5MEAMG6JYCnOr+O38aax5i+XdM6u4YgAUCw6gRwNMn3VOc/66iijvY6e7Hff07fdv6ze1okAAh2eg3g6c7f+vg6HCMrrQH0+n8mAUCw6gRglx3cp3WupXZtRwKAYKfPAuw/r/OPyX7/ufTazVr7e5UAIFgxAdSeR5YExuQ8P7+RACDYYQJI7RwpE4KM5am/MwkAgn09B1D7+dlYw2Amvfa0SAAQ7DABpHTCq2asR/GW74P/sxcAOG36ewOeddduq6vZ708LCQCCxSaAjWsKkkwCgGAKAARTACBY7BrAW1bJ7fenhQQAwWITwGb2DmkOgBYSAARTACCYAgDB4tcAYGSl/f6txyUACCYBTM4cwDuVdqO2Ht9IABBMApicOYB3KV2XovX4ngQAweITgPsAMILenb42CUgAECw2ARxVxFmuBcg7la5Q1Xp8TwKAYLEJYDP7NQHNAdBCAoBgcQmgdnZ69LWA2ZMLP9XObfSe+5AAIFhcAtiU7nY8aocdNZHQR+uajrsDA9ViEwDMoHW/f4kEAMFiE0BpEhCe1Gu/f4kEAMHiEsB+ld9+eUbSe79/iQQAweISwEaHZyRXX/nniAQAwWITAIyo937/EgkAgikAEEwBgGDWAGAAV+33L5EAINjy+XyGHn6fZTbfXAEzkgAg2PAJALiOBADBFAAIpgBAMAUAgikAEMwkIAzEnYGA2ygAMKBlWX6dLm09vlEAIJg1ABhQ65WBavfQSAAQzF4AGFDrnYFqrxIsAUAwBQAGtq7rr+/nW48rABBMAYBgCgAEcxYAgkkAEEwBgGAKAARTACCYAgDBFAAIpgBAMAUAgikAEEwBgGAKAARTACCYAgDBFAAIpgBAMAUAgikAEOwf2apcR/WxAp8AAAAASUVORK5CYII="},177:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACACAYAAADktbcKAAAEs0lEQVR4nO3dSbabOhQFUJz15j9lpxN75ePoqwAM4uzdy3NxXUU6XAQ8lmV5LsuyPJ/P5V8ej8d//v26X+/fS89Xup/66ifVP8uvs18AcJ6f0sj1Urv95XV76f6l29VXP7l+qU7vv0dJABDsZ+sT7DUSqa+++uVeROvtvSQACFZMAK0j0XqbZC/qq59Uf2sPYZQEAMF+SiNYbWTrHfl6n0d99RPql5539PZeEgAE29wDaLX3iKm++neu/y0SAAR7LMuyy5B09lpo9dVPrj9KAoBgP6VtktpItr5f78hW2xZSX/2E+mcnAgkAgn3sBejdD1kbyXpHOPXVT67/bRIABHsngL27l72PV1/95PpnkQAg2Mc6gNJRTrURrPa4vZ5HffXvXP/bJAAI9u4B9I5gvSNa7XHqq59c/ywSAAT7WAcwOhKW9I546qufXP/bJAAIVlwJ2LrN07p/tTZSqq9+cv3e17cXCQCCdfcA1vd7KY2MrSOb+uqrX6+zNwkAgj2Wpe+MQLUR6ehup/rq37H+1nUHoz0ECQCCdSeAvR29jQNXtrXXsHWdgwQAwYp7AXq1bptcdUUUXEltxeFeKwwlAAhWPBqwV+/+U0mAKxndb3+Ura+n9Dh7AYC34rUBIclRM3/vTL71dfQmbAkAgh2eAGzzk2j0/AHfJgFAsOrRgEC/3pn/rP9vEgAEex8LsPXcZ6MrAa+2TQTftHXm37rSVgKAYB8J4H3D4HHJrcz8zODo7v3ZvTYJAII1nxW4xEzOHc2yH38rCQCCvRNA7bhjSHL3mf9FAoBgxR4AcN+Z/0UCgGDd5wSUEOA+JAAI1n1OQEcLwn1IABCs2gMw00O72dYNSAAQrLoSEKib9dgBCQCCFa8OXLuyyNVHNpjB2T02CQCCFa8LcPbIBBxPAoBgw8cC6AXA/CQACOZYAL5KcrwWCQCCHX51YPibmf9aJAAIVkwAtvXvxZWc+BcJAIIV1wHsfS1AzjH6va2/d937e5IAIFjztQGN/HPZmthKvwO/h3uRACBYcw+AuZV6ObW/j/L7mYMEAMGqPYD135lDbe9N6SrQ6/v3fu96SHORACBY9azArTMI17J15t1r/YDfybVJABCs2ANI13pehKtbz8Tfet2zfD7pJAAI5pyAK63v66rvf3QFn+SXSQKAYO8rA5W6/7WjA682A44afT9bH3eU3nUco8ngLt//Wc5OXhIABHM0YMXen8fRn+d6m3+t933U7p/++5idBADBqisBjexwXxIABHvvBeh1t2Rw170A397bQB97AYDTuDLQH73d8a3d76P3ApTq7DXjmPnvQQKAYB89gNaZr/X+s+pdAWf9BCP0AIDTvHsArV3jlCsF9c7cZn5mJAFAMHsBdmbmZyYSAAQrDgDP59NsBjcnAUCw5msD3r3rD4kkAAjmjEAV6e+fe5MAIFhzDyCNJEQCCQCCVXsA67+nMPOTQAKAYNXzAdTOLw+MOztZSwAQrNgDYB96CFyZBADBiusASlqvN5/OOgJmIAFAsI9zAr7UZjC9gv9n5mcGEgAEczTgH0e9z7t/bsxNAoBg7wRQmgFTZrCU9wl/kwAg2PBKQDMmzE8CgGC/AfDPUtk/Itx7AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=component---src-pages-index-js-330c22dc921c4d58f3e2.js.map