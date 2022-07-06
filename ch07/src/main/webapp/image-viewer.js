var imageViewer = {
    init: function(){
        $(this._init.bind(this));
    },
    _init: function(){
        $('#btn-change').click(this._changeImage.bind(this));
        $('#btn-slideshow').click(this._slideShow.bind(this));
        $('.image-viewer img').dblclick(this._showImageName);
        // 첫번째 이미지 로딩
        this._changeImage();        
    }, 
    _slideShow: function(){
        /*  시작, 중지 / 버튼 텍스트도 변경
            시작 : intervalId = setInterval(...) 
            중지 : intervalId != null && clearInterval(...)
         */
       
        if(this._intervalId){
            clearInterval(this._intervalId);
            this._intervalId = null;
            $('#btn-slideshow').text("슬라이드쇼 시작");
        }else{
            this._intervalId = setInterval(this._changeImage.bind(this), 2000);
            $('#btn-slideshow').text("슬라이드쇼 중지");
        }
    },
    _intervalId: null,
    _showImageName: function() {
        alert($(this).attr('alt'));
    },
    _changeImage: function() {
        do{
       var index = Math.floor(Math.random()*this._images.length);
        } while($(".image-viewer img").attr('alt') === this._images[index].name);

       var info = this._images[index];

       $(".image-viewer img").attr({
        src: 'images/' + info.file,
        alt: info.name
       });
    },   
    _images: [{
        name: '이미지01',
        file: 'Chrysanthemum.jpg'
    },{
        name: '이미지02',
        file: 'Desert.jpg' 
    },{
        name: '이미지03',
        file: 'Hydrangeas.jpg' 
    },{
        name: '이미지04',
        file: 'Jellyfish.jpg' 
    },{
        name: '이미지05',
        file: 'Koala.jpg' 
    },{
        name: '이미지06',
        file: 'Lighthouse.jpg' 
    },{
        name: '이미지07',
        file: 'Penguins.jpg'
    }]

}