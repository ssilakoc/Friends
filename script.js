function hesaplaSonuc(event) {
    event.preventDefault(); 

    let karakterPuanlari = {
        Chandler: 0,
        Monica: 0,
        Phoebe: 0,
        Ross: 0,
        Rachel: 0,
        Joey: 0
    };

    
    let cevaplar = document.querySelectorAll('input[type="radio"]:checked');

    if (cevaplar.length === 0) {
alert("Lütfen önce testi çözünüz!");  
window.scrollTo(0, 0);  
return;  
}else if(cevaplar.length !==15) {
alert("Lütfen bütün cevapları doldurunuz!");
window.scrollTo(0, 0);
return;
}
    cevaplar.forEach((cevap) => {
        karakterPuanlari[cevap.value]++;
console.log(karakterPuanlari)

    });  

    let enYuksekKarakter = Object.keys(karakterPuanlari).reduce((a, b) => karakterPuanlari[a] > karakterPuanlari[b] ? a : b);

    let karakterFotograflari = {
        Chandler: "../img/chandlerbing.jpg",
        Monica: "../img/monica geller.jpg",
        Phoebe: "../img/pheobebuffay.jpg",
        Ross: "../img/rossgeller.jpg", 
        Rachel: "../img/rachelgreen.jpg",
        Joey: "../img/joeytribbiani.jpg"
    };

    let karakterYorumları = {
        Chandler: "Chandler Bing gibisin !En İyisi belki de en KOMİK ana karakterdi Chandler oldukça şefkatliydi.Oda arkadaşları ve komşuları için her şeyi bırakıp onlara destek olurdu, onları dinler veya tavsiyelerde bulunurdu ve ne olursa olsun hepsine değer verdiğini gösterirdi.  Büyüleyici ve çılgın bir kişiliğe sahipsin ve boş zamanlarını yemek yiyerek, oynayarak, televizyon izleyerek ve rahat bir şekilde takılmakla geçirmekten hoşlanıyor olabilirsin. Evet, stresli durumlardan hoşlanmadığı defalarca söylendiği için, evde eğlenceli vakit geçirmeyi diğerlerinden dahaçok seven bir karaktere sahipsin.",
        Monica: "Monina Geller gibisin ! Monica her ne kadar arkadaş canlısı ve sevecen olsa da en çok takıntılı hale gelmiş titizliğiyle tanınmaktadır.  Monica oldukça rekabetçidir ve bu huyu oyun oynarken özellikle ortaya çıkar. Ona göre kurallar  eğlenceyi sağlamaktadır. Monica arkadaşları tarafından da rekabetçi ve kontrolcü olarak anılsa da bu halleri en iyi Chandler ile olan ilişkisinde görülür. Keza yaşadıkları her anlaşmada kazanan Monica'dır.  Bir çift olduktan sonra Chandler, 'Artık hiç mi tartışmaları kazanma şansım olmayacak?' diye sorduğunda Monica'nın  cevabı, 'Zaten ne ara kazanıyordun ki?'olmuştur.",
        Phoebe: "Phoebe Buffay gibisin ! Dizideki en orjinal karakter olan Phoebe'dir. Sen aynı zamanda hem saf hem çakal olabilen birisisin.bazı açılardan hala kalbinde çocuksun.bazı insanları, onları her zamanki halinden şaşırtacak kadar açık sözlülüğünle şok edebilirsin.Yeni şeyler denemeyi seversin , 6.hissin kuvvetlidir her güne uyandığında güneşi selamlayan bir karaktere sahip olabilirsin.",
        Ross: "Ross Geller gibisin!Ross muhtemelen Friends'teki en zeki ana karakterdi  eğitimliydi, işini biliyordu ve bilgisini başkalarına  aktarmayı severdi..Senin aynı ross gibi sakin bir yapın var. Olaylara her zaman mantıklı vepozitif bir şekilde yaklaşmaya çalışıyorsun. Zaman zaman yanlış kararlar verebiliyorsun. Böyle anlarda sakinleşip kontrolü ele aldığın zaman her şeyi düzeltebilecek bir gücün var. Bu yüzden kesinlikle Ross!",
        Rachel: "Rachell Green gibisin  ! Rachel'ın en dikkat çekici özelliklerinden biri stil anlayışıydı. Modayı, alışverişi ve trendleri takip etmeyiseverdi ve sadece evde takılırken bile cilalı ve güzel görünürdü. Sen yardımsever ve herkese neşe, mutluluk ve güneş ışığı yaymak için elinden geleni yaparsın. Biraz kolay etkilenen birisin çatışmayı sevmezsin. Hızlı zekâlı ve alaycı olabilirsin ve  ayrıca, romantik ilişkiler söz konusu olduğunda , Rachel da dahil olmak üzere bu karakterler gerçek aşktan asla vazgeçmemeyi biliyorlardı..",
        Joey: "Joey Tribbiani gibisin!Sıcakkanlı, eğlenceli ve her zaman iyi vakit geçirmek için hazırsın. İnsanları nasıl güldüreceğini biliyorsunve harika bir mizah anlayışın var. Ayrıca kocaman bir kalbin var ve sana ihtiyaçları olduğunda arkadaşlarınızı desteklemeye her zaman hazırsınız.Kulübedeki en keskin alet olmayabilirsin ama bu senin çekiciliğinin bir parçası. Joey gibi, sevimlisin ve nereye gidersen git her zaman arkadaş edinirsin. Aynı zamanda harika bir dinleyicisin ve insanlar seninle konuştuktan sonra kendilerini her zaman daha iyi hissederler."
    };

    
    document.querySelector('#sonuc').innerHTML = `Senin karakterin: <strong>${enYuksekKarakter}</strong>!`;
    window.scrollTo(0, document.querySelector("#sonuc").offsetTop - 50);
    document.querySelector('#foto').innerHTML = `<img src="${karakterFotograflari[enYuksekKarakter]}"  style="width:300px;  height:auto; border-radius: 10px; ">`;
    document.querySelector('#yorum').innerHTML = `<h4 style="color: red;">${enYuksekKarakter} gibisin !</h4><p>${karakterYorumları[enYuksekKarakter]}</p> `;
    
    return false;
}