const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    songs: [
        {
            name: 'Buông đôi tay nhau ra',
            singer: 'Sơn Tùng MT-P',
            path: '/asset/song/song-1.mp3',
            image:'/asset/img/albumThumnail/img-1.jpg'
        },
        {
            name: 'Cheer up',
            singer: 'Hong Jin Young',
            path: '/asset/song/song-2.mp3',
            image:'/asset/img/albumThumnail/img-2.jpg'
        },
        {
            name: 'Chiều nay không có mưa bay',
            singer: 'Trung Quân Idol',
            path: '/asset/song/song-3.mp3',
            image:'/asset/img/albumThumnail/img-3.jpg'
        },
        {
            name: 'Demons',
            singer: 'Imagine Dragons',
            path: '/asset/song/song-4.mp3',
            image:'/asset/img/albumThumnail/img-4.jpg'
        },
        {
            name: 'Faded',
            singer: 'Alan Walker',
            path: '/asset/song/song-5.mp3',
            image:'/asset/img/albumThumnail/img-5.png'
        },
        {
            name: 'Sau tất cả',
            singer: 'Erik',
            path: '/asset/song/song-6.mp3',
            image:'/asset/img/albumThumnail/img-6.jpg'
        },
        {
            name: 'Tìm Em',
            singer: 'Hồ Quang Hiếu',
            path: '/asset/song/song-7.mp3',
            image:'/asset/img/albumThumnail/img-7.jpg'
        },
        {
            name: 'Titanium',
            singer: 'david Guetta',
            path: '/asset/song/song-8.mp3',
            image:'/asset/img/albumThumnail/img-8.jpg'
        },
        {
            name: 'Waiting for love',
            singer: 'Avicii',
            path: '/asset/song/song-9.mp3',
            image:'/asset/img/albumThumnail/img-9.jpg'
        },
        {
            name: 'Yêu một người có lẽ',
            singer: 'Miu Lê',
            path: '/asset/song/song-10.mp3',
            image:'/asset/img/albumThumnail/img-10.jpg'
        }
    ],

    render: function() {
        const htmls = this.songs.map(song => {
            return `
            <div class="song-item">
                <div class="album-picture" 
                style="background-image: url('${song.image}')"></div>
                <div class="song-info">
                    <h3 class="song-name"> ${song.name}</h3>
                    <span class="song-singer">${song.singer}</span>
                </div>
                <div class="song-menu">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        $('.play-list').innerHTML = htmls.join('')
    },

    handleEvents: function() {
        const cd = $('.cd');
        const cdWidth = cd.offsetWidth;

        document.onscroll = function() {
            const scrollTop = document.documentElement.scrollTop || window.scrollY;
            const newCdWidth = cdWidth - scrollTop;

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = Math.abs(newCdWidth / cdWidth) 
        }
    },
    start: function() {
        this. handleEvents()
        this.render()
    }
}
    
app.start()