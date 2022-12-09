/*
 Highcharts JS v10.3.2 (2022-11-28)

 Sonification module

 (c) 2012-2021 ystein Moseng

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/sonification",["highcharts"],function(l){a(l);a.Highcharts=l;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function l(a,d,h,k){a.hasOwnProperty(d)||(a[d]=k.apply(null,h),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:d,module:a[d]}})))}a=a?a._modules:{};
l(a,"Extensions/Sonification/MusicalFrequencies.js",[],function(){return[16.351597831287414,17.323914436054505,18.354047994837977,19.445436482630058,20.601722307054366,21.826764464562746,23.12465141947715,24.499714748859326,25.956543598746574,27.5,29.13523509488062,30.86770632850775,32.70319566257483,34.64782887210901,36.70809598967594,38.890872965260115,41.20344461410875,43.653528929125486,46.2493028389543,48.999429497718666,51.91308719749314,55,58.27047018976124,61.7354126570155,65.40639132514966,
69.29565774421802,73.41619197935188,77.78174593052023,82.4068892282175,87.30705785825097,92.4986056779086,97.99885899543733,103.82617439498628,110,116.54094037952248,123.47082531403103,130.8127826502993,138.59131548843604,146.8323839587038,155.56349186104046,164.81377845643496,174.61411571650194,184.9972113558172,195.99771799087463,207.65234878997256,220,233.08188075904496,246.94165062806206,261.6255653005986,277.1826309768721,293.6647679174076,311.1269837220809,329.6275569128699,349.2282314330039,
369.9944227116344,391.99543598174927,415.3046975799451,440,466.1637615180899,493.8833012561241,523.2511306011972,554.3652619537442,587.3295358348151,622.2539674441618,659.2551138257398,698.4564628660078,739.9888454232688,783.9908719634985,830.6093951598903,880,932.3275230361799,987.7666025122483,1046.5022612023945,1108.7305239074883,1174.6590716696303,1244.5079348883237,1318.5102276514797,1396.9129257320155,1479.9776908465376,1567.981743926997,1661.2187903197805,1760,1864.6550460723597,1975.533205024496,
2093.004522404789,2217.4610478149766,2349.31814333926,2489.0158697766474,2637.02045530296,2793.825851464031,2959.955381693075,3135.9634878539946,3322.437580639561,3520,3729.3100921447194,3951.066410048992,4186.009044809578]});l(a,"Extensions/Sonification/SignalHandler.js",[],function(){return function(){function a(a){this.supportedSignals=this.signals=void 0;this.init(a||[])}a.prototype.init=function(a){this.supportedSignals=a;this.signals={}};a.prototype.registerSignalCallbacks=function(a){var d=
this;d.supportedSignals.forEach(function(k){var n=a[k];n&&(d.signals[k]=d.signals[k]||[]).push(n)})};a.prototype.clearSignalCallbacks=function(a){var d=this;a?a.forEach(function(a){d.signals[a]&&delete d.signals[a]}):d.signals={}};a.prototype.emitSignal=function(a,h){var d;this.signals[a]&&this.signals[a].forEach(function(a){a=a(h);d="undefined"!==typeof a?a:d});return d};return a}()});l(a,"Extensions/Sonification/SonificationUtilities.js",[a["Extensions/Sonification/MusicalFrequencies.js"],a["Extensions/Sonification/SignalHandler.js"],
a["Core/Utilities.js"]],function(a,d,h){var k=h.clamp,n=h.merge,g={musicalFrequencies:a,SignalHandler:d,getExtremesForInstrumentProps:function(a,b,f){var c=a.options.sonification&&a.options.sonification.defaultInstrumentOptions,q=function(a){return{instrumentMapping:a.mapping}},r=(b||[]).slice(0);c&&r.push(q(c));a.series.forEach(function(a){(a=a.options.sonification&&a.options.sonification.instruments)&&(r=r.concat(a.map(q)))});return r.reduce(function(c,b){Object.keys(b.instrumentMapping||{}).forEach(function(q){q=
b.instrumentMapping[q];"string"!==typeof q||c[q]||(c[q]=g.calculateDataExtremes(a,q))});return c},n(f))},getMusicalScale:function(c){return a.filter(function(a,f){var b=f%12+1;return c.some(function(a){return a===b})})},calculateDataExtremes:function(a,b){return a.series.reduce(function(a,c){c.points.forEach(function(c){c="undefined"!==typeof c[b]?c[b]:c.options[b];a.min=Math.min(a.min,c);a.max=Math.max(a.max,c)});return a},{min:Infinity,max:-Infinity})},virtualAxisTranslate:function(a,b,f,d){var c=
b.max-b.min;a=f.min+Math.abs(f.max-f.min)*(d?b.max-a:a-b.min)/c;return 0<c?k(a,f.min,f.max):f.min}};return g});l(a,"Extensions/Sonification/Options.js",[],function(){return{sonification:{enabled:!1,duration:2500,afterSeriesWait:700,masterVolume:1,order:"sequential",defaultInstrumentOptions:{instrument:"sineMusical",minFrequency:392,maxFrequency:1046,mapping:{pointPlayTime:"x",duration:200,frequency:"y"}}}}});l(a,"Extensions/Sonification/Sonification.js",[a["Core/Defaults.js"],a["Core/Utilities.js"],
a["Extensions/Sonification/SonificationUtilities.js"],a["Extensions/Sonification/Options.js"]],function(a,d,h,k){d=d.merge;d(!0,a.defaultOptions,k);a={fadeOutDuration:20,utilities:h};"";return a});l(a,"Extensions/Sonification/Instrument.js",[a["Core/Globals.js"],a["Extensions/Sonification/Sonification.js"],a["Extensions/Sonification/SonificationUtilities.js"],a["Core/Utilities.js"]],function(a,d,h,k){var n=a.win,g=k.error,c=k.merge,b=k.pick,f=k.uniqueKey,t=function(){function a(a){this.playCallbackTimers=
this.options=this.masterVolume=this.id=void 0;this.init(a)}a.prototype.init=function(b){if(this.initAudioContext()){this.options=c(a.defaultOptions,b);this.id=this.options.id=b&&b.id||f();this.masterVolume=this.options.masterVolume||0;b=a.audioContext;var e=this.destinationNode||b.destination;this.gainNode=b.createGain();this.setGain(0);(this.panNode=b.createStereoPanner&&b.createStereoPanner())?(this.setPan(0),this.gainNode.connect(this.panNode),this.panNode.connect(e)):this.gainNode.connect(e);
"oscillator"===this.options.type&&this.initOscillator(this.options.oscillator);this.playCallbackTimers=[]}else g(29)};a.prototype.copy=function(b){return new a(c(this.options,{id:null},b))};a.prototype.initAudioContext=function(){var b=n.AudioContext||n.webkitAudioContext,c=!!a.audioContext;return b?(a.audioContext=a.audioContext||new b,!c&&a.audioContext&&"running"===a.audioContext.state&&a.audioContext.suspend(),!!(a.audioContext&&a.audioContext.createOscillator&&a.audioContext.createGain)):!1};
a.prototype.initOscillator=function(b){this.oscillator=a.audioContext.createOscillator();this.oscillator.type=b.waveformShape;this.oscillator.connect(this.gainNode);this.oscillatorStarted=!1};a.prototype.setPan=function(b){this.panNode&&this.panNode.pan.setValueAtTime(b,a.audioContext.currentTime)};a.prototype.setGain=function(b,c){var e=this.gainNode;b*=this.masterVolume;e&&(1.2<b&&(console.warn("Highcharts sonification warning: Volume of instrument set too high."),b=1.2),c?(e.gain.setValueAtTime(e.gain.value,
a.audioContext.currentTime),e.gain.linearRampToValueAtTime(b,a.audioContext.currentTime+c/1E3)):e.gain.setValueAtTime(b,a.audioContext.currentTime))};a.prototype.cancelGainRamp=function(){this.gainNode&&this.gainNode.gain.cancelScheduledValues(0)};a.prototype.setMasterVolume=function(a){this.masterVolume=a||0};a.prototype.getValidFrequency=function(a,c,m){var e=this.options.allowedFrequencies,f=b(m,Infinity),d=b(c,-Infinity);return e&&e.length?e.reduce(function(b,c){return Math.abs(c-a)<Math.abs(b-
a)&&c<f&&c>d?c:b},Infinity):a};a.prototype.clearPlayCallbackTimers=function(){this.playCallbackTimers.forEach(function(a){clearInterval(a)});this.playCallbackTimers=[]};a.prototype.setFrequency=function(a,b){b=b||{};a=this.getValidFrequency(a,b.min,b.max);"oscillator"===this.options.type&&this.oscillatorPlay(a)};a.prototype.oscillatorPlay=function(b){this.oscillatorStarted||(this.oscillator.start(),this.oscillatorStarted=!0);this.oscillator.frequency.setValueAtTime(b,a.audioContext.currentTime)};
a.prototype.preparePlay=function(){this.setGain(.001);"suspended"===a.audioContext.state&&a.audioContext.resume();this.oscillator&&!this.oscillatorStarted&&(this.oscillator.start(),this.oscillatorStarted=!0)};a.prototype.play=function(c){var e=this,m=c.duration||0,f=function(a,b,f){var m=c.duration,d=e.options.playCallbackInterval,g=0;if("function"===typeof a){var w=setInterval(function(){g++;var c=g*d/m;if(1<=c)e[b](a(1),f),clearInterval(w);else e[b](a(c),f)},d);e.playCallbackTimers.push(w)}else e[b](a,
f)};if(e.id)if("suspended"===a.audioContext.state||this.oscillator&&!this.oscillatorStarted)e.preparePlay(),setTimeout(function(){e.play(c)},10);else{e.playCallbackTimers.length&&e.clearPlayCallbackTimers();e.cancelGainRamp();e.stopOscillatorTimeout&&(clearTimeout(e.stopOscillatorTimeout),delete e.stopOscillatorTimeout);e.stopTimeout&&(clearTimeout(e.stopTimeout),delete e.stopTimeout,e.stopCallback&&(e._play=e.play,e.play=function(){},e.stopCallback("cancelled"),e.play=e._play));var g=m<d.fadeOutDuration+
20;e.stopCallback=c.onEnd;var n=function(){delete e.stopTimeout;e.stop(g)};m?(e.stopTimeout=setTimeout(n,g?m:m-d.fadeOutDuration),f(c.frequency,"setFrequency",{minFrequency:c.minFrequency,maxFrequency:c.maxFrequency}),f(b(c.volume,1),"setGain",4),f(b(c.pan,0),"setPan")):n()}};a.prototype.mute=function(){this.setGain(.0001,.8*d.fadeOutDuration)};a.prototype.stop=function(a,b,c){var e=this,f=function(){e.stopOscillatorTimeout&&delete e.stopOscillatorTimeout;if(e.oscillator&&e.options.oscillator){try{e.oscillator.stop()}catch(u){}e.gainNode&&
e.oscillator.disconnect(e.gainNode);e.initOscillator(e.options.oscillator)}b&&b(c);e.stopCallback&&e.stopCallback(c)};e.playCallbackTimers.length&&e.clearPlayCallbackTimers();e.stopTimeout&&clearTimeout(e.stopTimeout);a?(e.setGain(0),f()):(e.mute(),e.stopOscillatorTimeout=setTimeout(f,d.fadeOutDuration+100))};a.defaultOptions={type:"oscillator",playCallbackInterval:20,masterVolume:1,oscillator:{waveformShape:"sine"}};a.definitions={};return a}();["sine","square","triangle","sawtooth"].forEach(function(a){t.definitions[a]=
new t({oscillator:{waveformShape:a}});t.definitions[a+"Musical"]=new t({allowedFrequencies:h.musicalFrequencies,oscillator:{waveformShape:a}});t.definitions[a+"Major"]=new t({allowedFrequencies:h.getMusicalScale([1,3,5,6,8,10,12]),oscillator:{waveformShape:a}})});"";return t});l(a,"Extensions/Sonification/Earcon.js",[a["Extensions/Sonification/Instrument.js"],a["Core/Utilities.js"]],function(a,d){var h=d.error,k=d.merge,n=d.pick,g=d.uniqueKey;d=function(){function c(a){this.options=this.instrumentsPlaying=
this.id=void 0;this.init(a||{})}c.prototype.init=function(a){this.options=a;this.options.id||(this.options.id=this.id=g());this.instrumentsPlaying={}};c.prototype.sonify=function(c){var b=k(this.options,c),d=n(b.volume,1),g=b.pan,r=this,e=c&&c.onEnd,m=r.options.onEnd;b.instruments.forEach(function(c){var b="string"===typeof c.instrument?a.definitions[c.instrument]:c.instrument,f=k(c.playOptions),q="";if(b&&b.play){if(c.playOptions){f.pan=n(g,f.pan);var t=f.onEnd;f.onEnd=function(){delete r.instrumentsPlaying[q];
t&&t.apply(this,arguments);Object.keys(r.instrumentsPlaying).length||(e&&e.apply(this,arguments),m&&m.apply(this,arguments))};c=b.copy();c.setMasterVolume(d);q=c.id;r.instrumentsPlaying[q]=c;c.play(f)}}else h(30)})};c.prototype.cancelSonify=function(a){var c=this.instrumentsPlaying,b=c&&Object.keys(c);b&&b.length&&(b.forEach(function(b){c[b].stop(!a,null,"cancelled")}),this.instrumentsPlaying={})};return c}();"";return d});l(a,"Extensions/Sonification/Timeline.js",[a["Extensions/Sonification/Sonification.js"],
a["Core/Utilities.js"],a["Extensions/Sonification/SonificationUtilities.js"]],function(a,d,h){var k=d.merge,n=d.splat;d=function(){function d(a){this.signalHandler=this.pathsPlaying=this.paths=this.options=this.cursor=void 0;this.init(a||{})}d.prototype.init=function(a){this.options=a;this.cursor=0;this.paths=a.paths||[];this.pathsPlaying={};this.signalHandler=new h.SignalHandler(["playOnEnd","masterOnEnd","onPathStart","onPathEnd"]);this.signalHandler.registerSignalCallbacks(k(a,{masterOnEnd:a.onEnd}))};
d.prototype.play=function(a){this.pause();this.signalHandler.clearSignalCallbacks(["playOnEnd"]);this.signalHandler.registerSignalCallbacks({playOnEnd:a});this.playPaths(1)};d.prototype.rewind=function(a){this.pause();this.signalHandler.clearSignalCallbacks(["playOnEnd"]);this.signalHandler.registerSignalCallbacks({playOnEnd:a});this.playPaths(-1)};d.prototype.playPaths=function(c){var b=this,d=b.signalHandler;if(b.paths.length){var g=n(this.paths[this.cursor]),k=this.paths[this.cursor+c],h=function(a){d.emitSignal("onPathStart",
a);b.pathsPlaying[a.id]=a;a[0<c?"play":"rewind"](function(e){e=e&&e.cancelled;var f={path:a,cancelled:e};delete b.pathsPlaying[a.id];d.emitSignal("onPathEnd",f);var m=0;m++;m>=g.length&&(k&&!e?(b.cursor+=c,n(k).forEach(function(a){a[0<c?"resetCursor":"resetCursorEnd"]()}),b.playPaths(c)):(d.emitSignal("playOnEnd",f),d.emitSignal("masterOnEnd",f)))})};g.forEach(function(c){c&&(c.timeline=b,setTimeout(function(){h(c)},a.fadeOutDuration))})}else{var e={cancelled:!1};d.emitSignal("playOnEnd",e);d.emitSignal("masterOnEnd",
e)}};d.prototype.pause=function(a){var c=this;Object.keys(c.pathsPlaying).forEach(function(b){c.pathsPlaying[b]&&c.pathsPlaying[b].pause(a)});c.pathsPlaying={}};d.prototype.resetCursor=function(){this.paths.forEach(function(a){n(a).forEach(function(a){a.resetCursor()})});this.cursor=0};d.prototype.resetCursorEnd=function(){this.paths.forEach(function(a){n(a).forEach(function(a){a.resetCursorEnd()})});this.cursor=this.paths.length-1};d.prototype.setCursor=function(a){return this.paths.some(function(c){return n(c).some(function(c){return c.setCursor(a)})})};
d.prototype.getCursor=function(){return this.getCurrentPlayingPaths().reduce(function(a,b){a[b.id]=b.getCursor();return a},{})};d.prototype.atStart=function(){return this.cursor?!1:!n(this.paths[0]).some(function(a){return a.cursor})};d.prototype.getCurrentPlayingPaths=function(){return this.paths.length?n(this.paths[this.cursor]):[]};return d}();"";return d});l(a,"Extensions/Sonification/TimelineEvent.js",[a["Core/Utilities.js"]],function(a){var d=a.merge,h=a.uniqueKey;a=function(){function a(a){this.time=
this.options=this.id=void 0;this.init(a)}a.prototype.init=function(a){this.options=a;this.time=a.time||0;this.id=this.options.id=a.id||h()};a.prototype.play=function(a){var g=this.options.eventObject,c=this.options.onEnd,b=a&&a.onEnd,f=this.options.playOptions&&this.options.playOptions.onEnd;a=d(this.options.playOptions,a);g&&g.sonify?(a.onEnd=c||b||f?function(){var a=arguments;[c,b,f].forEach(function(c){c&&c.apply(this,a)})}:void 0,g.sonify(a)):(b&&b(),c&&c())};a.prototype.cancel=function(a){var d=
this.options.eventObject;d&&d.cancelSonify(a)};return a}();"";return a});l(a,"Extensions/Sonification/TimelinePath.js",[a["Extensions/Sonification/TimelineEvent.js"],a["Extensions/Sonification/SonificationUtilities.js"],a["Core/Utilities.js"]],function(a,d,h){var k=h.merge,n=h.uniqueKey;h=function(){function g(a){this.signalHandler=this.options=this.id=this.eventsPlaying=this.eventIdMap=this.events=this.cursor=void 0;this.init(a)}g.prototype.init=function(c){this.options=c;this.id=this.options.id=
c.id||n();this.cursor=0;this.eventsPlaying={};this.events=c.silentWait?[new a({time:0}),new a({time:c.silentWait})]:this.options.events;this.targetDuration=c.targetDuration||c.silentWait;this.sortEvents();this.updateEventIdMap();this.signalHandler=new d.SignalHandler(["playOnEnd","masterOnEnd","onStart","onEventStart","onEventEnd"]);this.signalHandler.registerSignalCallbacks(k(c,{masterOnEnd:c.onEnd}))};g.prototype.sortEvents=function(){this.events=this.events.sort(function(a,b){return a.time-b.time})};
g.prototype.updateEventIdMap=function(){this.eventIdMap=this.events.reduce(function(a,b,d){a[b.id]=d;return a},{})};g.prototype.addTimelineEvents=function(a){this.events=this.events.concat(a);this.sortEvents();this.updateEventIdMap()};g.prototype.getCursor=function(){return this.events[this.cursor]};g.prototype.setCursor=function(a){a=this.eventIdMap[a];return"undefined"!==typeof a?(this.cursor=a,!0):!1};g.prototype.play=function(a){this.pause();this.signalHandler.emitSignal("onStart");this.signalHandler.clearSignalCallbacks(["playOnEnd"]);
this.signalHandler.registerSignalCallbacks({playOnEnd:a});this.playEvents(1)};g.prototype.rewind=function(a){this.pause();this.signalHandler.emitSignal("onStart");this.signalHandler.clearSignalCallbacks(["playOnEnd"]);this.signalHandler.registerSignalCallbacks({playOnEnd:a});this.playEvents(-1)};g.prototype.resetCursor=function(){this.cursor=0};g.prototype.resetCursorEnd=function(){this.cursor=this.events.length-1};g.prototype.pause=function(a){var b=this;clearTimeout(b.nextScheduledPlay);Object.keys(b.eventsPlaying).forEach(function(c){b.eventsPlaying[c]&&
b.eventsPlaying[c].cancel(a)});b.eventsPlaying={}};g.prototype.playEvents=function(a){var b=this,c=b.events[this.cursor],d=b.events[this.cursor+a],g=function(a){b.signalHandler.emitSignal("masterOnEnd",a);b.signalHandler.emitSignal("playOnEnd",a)};c.timelinePath=b;if(!1===b.signalHandler.emitSignal("onEventStart",c))g({event:c,cancelled:!0});else if(b.eventsPlaying[c.id]=c,c.play({onEnd:function(a){a={event:c,cancelled:!!a};delete b.eventsPlaying[c.id];b.signalHandler.emitSignal("onEventEnd",a);d||
g(a)}}),d){var k=Math.abs(d.time-c.time);1>k?(b.cursor+=a,b.playEvents(a)):this.nextScheduledPlay=setTimeout(function(){b.cursor+=a;b.playEvents(a)},k)}};return g}();"";return h});l(a,"Extensions/Sonification/SeriesSonify.js",[a["Extensions/Sonification/Earcon.js"],a["Extensions/Sonification/Instrument.js"],a["Core/Series/Point.js"],a["Extensions/Sonification/SonificationUtilities.js"],a["Extensions/Sonification/Timeline.js"],a["Extensions/Sonification/TimelineEvent.js"],a["Extensions/Sonification/TimelinePath.js"],
a["Core/Utilities.js"]],function(a,d,h,k,n,g,c,b){var f=k.getExtremesForInstrumentProps,t=k.virtualAxisTranslate,q=b.extend,r=b.find,e=b.isArray,m=b.merge,w=b.objectEach,l=b.pick,u;(function(b){function k(a,b){a.forEach(function(a){a=a.instrument;"string"!==typeof a&&a.setMasterVolume(b)});return a}function y(a,b){var e=b.timeExtremes||G(a,b.pointPlayTime),p=f(a.chart,b.instruments,b.dataExtremes),d=u(a,b.instruments,p),m=l(b.masterVolume,1),A=E(b.instruments),v=k(A,m);A=a.points.reduce(function(a,
c){var N=D(c,b.earcons||[]),f=t(x(c,b.pointPlayTime),e,{min:0,max:Math.max(b.duration-d,10)});return a.concat(new g({eventObject:c,time:f,id:c.id,playOptions:{instruments:v,dataExtremes:p,masterVolume:m}}),N.map(function(a){return new g({eventObject:a,time:f,playOptions:{volume:m}})}))},[]);return new c({events:A,onStart:function(){if(b.onStart)b.onStart(a)},onEventStart:function(a){var c=a.options&&a.options.eventObject;if(c instanceof h){if(!c.series.visible&&!c.series.chart.series.some(function(a){return a.visible}))return a.timelinePath.timeline.pause(),
a.timelinePath.timeline.resetCursor(),!1;if(b.onPointStart)b.onPointStart(a,c)}},onEventEnd:function(a){var c=a.event&&a.event.options&&a.event.options.eventObject;if(c instanceof h&&b.onPointEnd)b.onPointEnd(a.event,c)},onEnd:function(){if(b.onEnd)b.onEnd(a)},targetDuration:b.duration})}function z(a){var b=a.options.sonification||{},c=a.chart.options.sonification||{},e=c.events||{},d=b.events||{};return{onEnd:d.onSeriesEnd||e.onSeriesEnd,onStart:d.onSeriesStart||e.onSeriesStart,onPointEnd:d.onPointEnd||
e.onPointEnd,onPointStart:d.onPointStart||e.onPointStart,pointPlayTime:c.defaultInstrumentOptions&&c.defaultInstrumentOptions.mapping&&c.defaultInstrumentOptions.mapping.pointPlayTime,masterVolume:c.masterVolume,instruments:C(a),earcons:b.earcons||c.earcons}}function u(a,b,c){var e=a.points[a.points.length-1];return b.reduce(function(a,b){b=b.instrumentMapping.duration;b="string"===typeof b?0:"function"===typeof b?b(e,c):b;return Math.max(a,b)},0)}function D(b,c){return c.reduce(function(c,e){var d=
e.earcon;e.condition?(e=e.condition(b),e instanceof a?c.push(e):e&&c.push(d)):e.onPoint&&b.id===e.onPoint&&c.push(d);return c},[])}function x(a,b){return"function"===typeof b?b(a):l(a[b],a.options[b])}function C(a,b){if(b&&b.instruments)return b.instruments;var c=a.chart.options.sonification&&a.chart.options.sonification.defaultInstrumentOptions||{},e=function(a){w(a,function(b,c){null===b&&delete a[c]})};return(a.options.sonification&&a.options.sonification.instruments||[{}]).map(function(a){e(a.mapping||
{});e(a);return{instrument:a.instrument||c.instrument,instrumentOptions:m(c,a,{mapping:void 0,instrument:void 0}),instrumentMapping:m(c.mapping,a.mapping)}})}function G(a,b){return a.points.reduce(function(a,c){c=x(c,b);a.min=Math.min(a.min,c);a.max=Math.max(a.max,c);return a},{min:Infinity,max:-Infinity})}function E(a){return a.map(function(a){var b=a.instrument;b=("string"===typeof b?d.definitions[b]:b).copy();return m(a,{instrument:b})})}function F(a){var b=this.chart.options.sonification,c=this.options.sonification;
a=m({duration:c&&c.duration||b&&b.duration},z(this),a);b=y(this,a);if(c=this.chart.sonification)c.timeline&&c.timeline.pause(),c.duration=a.duration,c.timeline=new n({paths:[b]}),c.timeline.play()}var B=[];b.compose=function(a){-1===B.indexOf(a)&&(B.push(a),q(a.prototype,{sonify:F}));return a};b.buildChartSonifySeriesOptions=function(a,b,c){var d=c.seriesOptions||{},f=a.chart.options.sonification;f=f&&f.defaultInstrumentOptions&&f.defaultInstrumentOptions.mapping&&f.defaultInstrumentOptions.mapping.pointPlayTime||
"x";var g=z(a);return m(g,{dataExtremes:b,timeExtremes:G(a,f),instruments:c.instruments||g.instruments,onStart:c.onSeriesStart||g.onStart,onEnd:c.onSeriesEnd||g.onEnd,earcons:c.earcons||g.earcons,masterVolume:l(c.masterVolume,g.masterVolume)},e(d)?r(d,function(b){return b.id===l(a.id,a.options.id)})||{}:d,{pointPlayTime:f})};b.buildTimelinePathFromSeries=y})(u||(u={}));return u});l(a,"Extensions/Sonification/ChartSonify.js",[a["Extensions/Sonification/Earcon.js"],a["Core/Series/Point.js"],a["Extensions/Sonification/SeriesSonify.js"],
a["Extensions/Sonification/SonificationUtilities.js"],a["Extensions/Sonification/Timeline.js"],a["Extensions/Sonification/TimelineEvent.js"],a["Extensions/Sonification/TimelinePath.js"],a["Core/Utilities.js"]],function(a,d,h,k,n,g,c,b){function f(b,e,d){if("sequential"===b||"simultaneous"===b){var p=e.series.reduce(function(a,b){b.visible&&!1!==(b.options.sonification&&b.options.sonification.enabled)&&a.push({series:b,seriesOptions:d(b)});return a},[]);"simultaneous"===b&&(p=[p])}else p=b.reduce(function(b,
p){p=v(p).reduce(function(b,p){var f;if("string"===typeof p){var m=e.get(p);m.visible&&(f={series:m,seriesOptions:d(m)})}else p instanceof a&&(f=new c({events:[new g({eventObject:p})]}));p.silentWait&&(f=new c({silentWait:p.silentWait}));f&&b.push(f);return b},[]);p.length&&b.push(p);return b},[]);return p}function l(a,b){return b?a.reduce(function(e,d,p){d=v(d);e.push(d);p<a.length-1&&d.some(function(a){return a.series})&&e.push(new c({silentWait:b}));return e},[]):a}function q(a){return a.reduce(function(a,
b){b=v(b);return a+(1===b.length&&b[0].options&&b[0].options.silentWait||0)},0)}function r(a){var b=a.reduce(function(a,b){(b=b.events)&&b.length&&(a.min=Math.min(b[0].time,a.min),a.max=Math.max(b[b.length-1].time,a.max));return a},{min:Infinity,max:-Infinity});a.forEach(function(a){var c=a.events,e=c&&c.length,d=[];e&&c[0].time<=b.min||d.push(new g({time:b.min}));e&&c[c.length-1].time>=b.max||d.push(new g({time:b.max}));d.length&&a.addTimelineEvents(d)})}function e(a){return a.reduce(function(a,
b){return a+v(b).reduce(function(a,b){return(b=b.series&&b.seriesOptions&&b.seriesOptions.timeExtremes)?Math.max(a,b.max-b.min):a},0)},0)}function m(a,b){var d=Math.max(b-q(a),0),p=e(a);return a.reduce(function(a,b){b=v(b).reduce(function(a,b){b instanceof c?a.push(b):b.series&&(b.seriesOptions.duration=b.seriesOptions.duration||M(b.seriesOptions.timeExtremes.max-b.seriesOptions.timeExtremes.min,{min:0,max:p},{min:0,max:d}),a.push(h.buildTimelinePathFromSeries(b.series,b.seriesOptions)));return a},
[]);a.push(b);return a},[])}function w(a,b){a=a.options.sonification||{};return B({duration:a.duration,afterSeriesWait:a.afterSeriesWait,pointPlayTime:a.defaultInstrumentOptions&&a.defaultInstrumentOptions.mapping&&a.defaultInstrumentOptions.mapping.pointPlayTime,order:a.order,onSeriesStart:a.events&&a.events.onSeriesStart,onSeriesEnd:a.events&&a.events.onSeriesEnd,onEnd:a.events&&a.events.onEnd},b)}function x(a){var b=w(this,a);this.sonification.timeline&&this.sonification.timeline.pause();this.sonification.duration=
b.duration;var c=L(this,b.instruments,b.dataExtremes);a=f(b.order,this,function(a){return h.buildChartSonifySeriesOptions(a,c,b)});a=l(a,b.afterSeriesWait||0);a=m(a,b.duration);a.forEach(function(a){r(a)});this.sonification.timeline=new n({paths:a,onEnd:b.onEnd});this.sonification.timeline.play()}function u(){if(this.sonification.timeline){var a=this.sonification.timeline.getCursor();return Object.keys(a).map(function(b){return a[b].options.eventObject}).filter(function(a){return a instanceof d})}return[]}
function C(a){var b=this.sonification.timeline;b&&v(a).forEach(function(a){b.setCursor(a.id)})}function H(a){this.sonification.timeline?this.sonification.timeline.pause(A(a,!0)):this.sonification.currentlyPlayingPoint&&this.sonification.currentlyPlayingPoint.cancelSonify(a)}function y(a){this.sonification.timeline&&this.sonification.timeline.play(a)}function z(a){this.sonification.timeline&&this.sonification.timeline.rewind(a)}function I(a){this.pauseSonify(a);this.resetSonifyCursor()}function D(){this.sonification.timeline&&
this.sonification.timeline.resetCursor()}function J(){this.sonification.timeline&&this.sonification.timeline.resetCursorEnd()}var L=k.getExtremesForInstrumentProps,M=k.virtualAxisTranslate,E=b.addEvent,F=b.extend,B=b.merge,A=b.pick,v=b.splat,K=[];k={chartSonify:x,compose:function(a){-1===K.indexOf(a)&&(K.push(a),F(a.prototype,{sonify:x,pauseSonify:H,resumeSonify:y,rewindSonify:z,cancelSonify:I,getCurrentSonifyPoints:u,setSonifyCursor:C,resetSonifyCursor:D,resetSonifyCursorEnd:J}),E(a,"init",function(){this.sonification=
{}}),E(a,"update",function(a){(a=a.options.sonification)&&B(!0,this.options.sonification,a)}));return a},pause:H,resume:y,rewind:z,cancel:I,getCurrentPoints:u,setCursor:C,resetCursor:D,resetCursorEnd:J};"";return k});l(a,"Extensions/Sonification/PointSonify.js",[a["Extensions/Sonification/Instrument.js"],a["Core/Utilities.js"],a["Extensions/Sonification/SonificationUtilities.js"]],function(a,d,h){var k=d.error,n=d.merge,g=d.pick,c=[],b={minDuration:20,maxDuration:2E3,minVolume:.1,maxVolume:1,minPan:-1,
maxPan:1,minFrequency:220,maxFrequency:2200},f;(function(d){function f(c){var d=this,e=d.series.chart,f=g(c.masterVolume,e.options.sonification&&e.options.sonification.masterVolume),l=c.dataExtremes||{},q=function(a,b,c){if("function"===typeof a)return b?function(b){return a(d,l,b)}:a(d,l);if("string"===typeof a){var e=(b="-"===a.charAt(0))?a.slice(1):a,f=g(d[e],d.options[e]);l[e]=l[e]||h.calculateDataExtremes(d.series.chart,e);return h.virtualAxisTranslate(f,l[e],c,b)}return a};e.sonification.currentlyPlayingPoint=
d;d.sonification=d.sonification||{};d.sonification.instrumentsPlaying=d.sonification.instrumentsPlaying||{};var r=d.sonification.signalHandler=d.sonification.signalHandler||new h.SignalHandler(["onEnd"]);r.clearSignalCallbacks();r.registerSignalCallbacks({onEnd:c.onEnd});!d.isNull&&d.visible&&d.series.visible?c.instruments.forEach(function(c){var g="string"===typeof c.instrument?a.definitions[c.instrument]:c.instrument,m=c.instrumentMapping||{},h=n(b,c.instrumentOptions),l=g.id,t=function(a){c.onEnd&&
c.onEnd.apply(this,arguments);e.sonification&&e.sonification.currentlyPlayingPoint&&delete e.sonification.currentlyPlayingPoint;d.sonification&&d.sonification.instrumentsPlaying&&(delete d.sonification.instrumentsPlaying[l],Object.keys(d.sonification.instrumentsPlaying).length||r.emitSignal("onEnd",a))};g&&g.play?("undefined"!==typeof f&&g.setMasterVolume(f),d.sonification.instrumentsPlaying[g.id]=g,g.play({frequency:q(m.frequency,!0,{min:h.minFrequency,max:h.maxFrequency}),duration:q(m.duration,
!1,{min:h.minDuration,max:h.maxDuration}),pan:q(m.pan,!0,{min:h.minPan,max:h.maxPan}),volume:q(m.volume,!0,{min:h.minVolume,max:h.maxVolume}),onEnd:t,minFrequency:h.minFrequency,maxFrequency:h.maxFrequency})):k(30)}):r.emitSignal("onEnd")}function l(a){var b=this.sonification&&this.sonification.instrumentsPlaying,c=b&&Object.keys(b);c&&c.length&&(c.forEach(function(c){b[c].stop(!a,null,"cancelled")}),this.sonification.instrumentsPlaying={},this.sonification.signalHandler.emitSignal("onEnd","cancelled"))}
d.compose=function(a){if(-1===c.indexOf(a)){c.push(a);var b=a.prototype;b.sonify=f;b.cancelSonify=l}return a}})(f||(f={}));"";return f});l(a,"masters/modules/sonification.src.js",[a["Core/Globals.js"],a["Extensions/Sonification/ChartSonify.js"],a["Extensions/Sonification/Earcon.js"],a["Extensions/Sonification/Instrument.js"],a["Extensions/Sonification/PointSonify.js"],a["Extensions/Sonification/SeriesSonify.js"],a["Extensions/Sonification/Sonification.js"],a["Extensions/Sonification/Timeline.js"],
a["Extensions/Sonification/TimelineEvent.js"],a["Extensions/Sonification/TimelinePath.js"]],function(a,d,h,k,l,g,c,b,f,t){var n=this&&this.__assign||function(){n=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++){b=arguments[c];for(var f in b)Object.prototype.hasOwnProperty.call(b,f)&&(a[f]=b[f])}return a};return n.apply(this,arguments)};a.sonification=n(n({},c),{instruments:k.definitions,Earcon:h,Instrument:k,Timeline:b,TimelineEvent:f,TimelinePath:t});a.Earcon=h;a.Instrument=k;
d.compose(a.Chart);g.compose(a.Series);l.compose(a.Point)})});
//# sourceMappingURL=sonification.js.map