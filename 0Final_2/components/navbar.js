function navbar() {
    return`
        <div>
        <div id="container1">
            <p>FOR ONLINE PAYMENT EXTRA ₹10% DISCOUNT ON ORDERS ABOVE ₹500</p>
        </div>

        <div id="container22">
            <div id="box1">
                <a href="uboric">
                <img src="./uboric.jpg" alt="">
                </a>
            </div>

            <div id="box2">
                <h3 ><a class="page" href="index.html">Home</a></h3>
                <h3 ><a class="page" href="about.html">About Us</a></h3>
                <h3 ><a class="page" href="shop.html">Shop</a></h3>
               <div class="dropdown">
                <h3 class="dropbtn" ><a class="page" href="cloth.html">Categories</a></h3>
                
              </div>
                <h3 ><a class="page" href="contact.html">Contact Us</a></h3>
            </div>
            
            <div id="box3">
            <input id="search" placeholder="Search for items" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAACzs7P39/f7+/vu7u64uLj4+Pj09PRzc3PPz8/h4eGpqam2trbq6uq8vLwTExMYGBgNDQ0eHh5PT08jIyMqKio/Pz+oqKgLCwvIyMhVVVXCwsKNjY2Xl5fU1NR+fn5paWlFRUWRkZF1dXU5OTmcnJyEhIRTU1NgYGAxMTFra2tCQkJj5jwEAAAJ9ElEQVR4nO1d6YKyOgx1EBQogxu4IIorDDrv/3zXWUiL0hE1XT4u57dCQ7OcpGnb6bRo0aJFixYtWrRo0eJfhGlbPomNebrKDtv8fMj2qddziW91VY8MAxZxjdV2Nnq7RRg460FCbNVDfAF2Mljn0wrZWBydeUz6qof6DKxBej7eke4Xi2Azd/81Id39clxPvF9Mz3OietD14a+DKru7K2Ru/BM22XW308UT8n1hOFsRU7UAd9B1z5MnxfudyL3WMtrR9iXxvjHReB6jnDvs0Wm3zLfOJtuvL2Hf2ebL2ZTvijI9nU6yqR7uKc/W3m3Is5LefHUIqnX6lFpKZPgLdjqr0rjlyov+GiyJ082uSsZ8IG3o9VCloBPHiGqom3mRclnx78wXP+za6K9ule1zntSPbr6b3T7haAgc8mNIbhT04vMfDd5W5Ny4HkcPBtB9v/r8i1363MjI5nQl4keCPNhn4K/KDGYRPO8HTZJdkfWToZyRJ1dOYpe+ltaSzVW6lSnWVLc8nsn+dQfoOmURc6WhcRCWBnNGMZvuoBwhl+oYjumVBJyhJT9kX3JegYv03IeRlsZxxvzU8Wfp20WIj34A+5IurXE9gl8iSaEKEc01O4RjjP6CNashYwUizoeiNLRAzDqco3RbfGedTCbGoZdibSCZ3kRsHFyJyslLxriUmmsQtpaWinuPvWVFlFjc8BmGPBKa49hs4eAgjaPaZ/rW4bvgd2WMiHOx76JYy3wp+zlPkmJGzASqlfjX9QPZ3oYwKVwm44UWEzQcCd6G1ZqNnNyNMLMowRQNBRGKib4j4akUo6MLeSwjlaenJuO8ZRb7aN6/6Il9U0TLTlK8TAGLsvCdUNtg3JpcmtiJKdMXGqGoPYT4CeHfoPn2SaD92zQnlKqjX2D09CzuLSt4yUz+sklEfZww8ubTSKFg0aRP04yNqGYqyrg/BL3hTxDgw0NBk+gDeRqpWTChfi4TkynSKTyoaSUg4GzGQj4xUT2F7DfORFiiJ97Q74FOYiiAgPeBGi6ULSMwYV9AFpWAJzuoW9Gjmc0O3xVQJVW0TPINmtqgq6n1UTx6qXLF0oVCLTptTODjCSwA1wD4miOymtKVplCdn/kCjGOMnNxY0DKT4z74UfjQdLPBfTDRREk7HVisWeJGZaiwzVQ3Rr4XdZQjKrPqQrhXrKQXbSrKGQsP87HUDCWU8e8MBcIWarxIig8nvTxzA+rVUVuJ1oXyz9T37kI1A3UlagvfTXkjHTVEVPYNTGKtvo3egnixxnuoDavaagnND8AQN3jPdAvFGKo3QyY2I7oao6gET9WbYacTC2AfUAkO1JvhRaOKXHyCZzOw7KuoyFYGrdbgBWegEapp9zcsiF14vE3AR3sFYDRo4cIEVqo6sfgB1L7RSLJ91EvCOQRELLdA29j02IoEZT8HK3iRqV4SQsjfYlVuIXd604HSMBKiFTajokg51kPCARAQrPHERX0r1ENCoG2fWFYTF7R0ooeEMIdorTVABDWxwx66llJPo5kvzdG2IWkWLSAeokUL3SI+cBq0iN981tYB5q3DtlymUINXnobsSXBvZz2Y0ByFV06Enss92iNfAN0rhPfBD+C8dKhiJOAW8IreUNT/1EHCqCCRUzy30Cuod6jDCWuUtOG5dgj5Yx0CooiKcB80X4MzVfrQU7NBfCo07WXqDZE2gSKuzNDtDsjtAc8gKRzNCHNjoFdkiEf1vA1yp09MhgWuRuyO0TroAqPZYi4T2aD7G8SnPgVfTNME9V8ytxtXIiliM263CS3+yNqoygWU9HE7hjo+7JaRvlmmDLqGkuNqkw3pRaD2zB9xXaBAlRZqaQ2kORPsuEX0UNM+lIwC7EfT3j2l3YkQ7gUsR0POomJXF4BuJMf/zgScWKAuhaKHHSwFPJ1uPlRXjwI/sxDRURDDRgBl+xHovny0FQsW3S1MoqqWDLqfBJexFYDeL1VZIl0hOonx5116ppESd2qCFQprAjVgr8NUBXWjW51DUasLXXrGiIKGdtrCLrD0boj/inzAitPbVCCrotvV0RYn64LIOTYipgd/SDuV6gd9ytfQOjAq30N3/Z/ktnyn8G0XmGXSWxB6UptUZuNSHV0Ktg+6WVZmosgc+4HY+sx515aKKC3ud5mT98S3KdP2obepLFOkgUJKmYg5cS+Qk+73qBGOZXxUkzlyU4q3YU/UltNIQJhj9CVkGQlz5rsjKalhTqUSf8ACe4jhh6wiWOmQ5JVYEQnl229TeSsKfSZkiD34PmGOTJRKFG32xVtx7sZlr4PYCXtNFXz2mGZhB9/HpXsJhmKKMzyU1EfMwfemcXURxFiuiC5714aIK2G6t5fXSJ7FmD2UHf9Mb6vi/qC3hdwSWOnUcuQz080e5/o2yYpaumnjhHi3n7/iXlkmdxavLpk5IDkcs/fBEU++LZLyVV1TlOvSeBe4qRHRvrqN7OPlNfD++vrSp2sgt5ncg70vW8wwj17xqvb8kyMXC7kimoOrO8kmefysy7Hmu1r3s44lr5uQ68g1yqMnZDQtb3Z1gel4+FaNoWQR+7euIfAeuDnvC767urkb+eR5Nw/+heTQf+E3we0gciOpa5G2W3U/5MbvdDyu1sq1xa8rgMPbQRwPaXy/Ap8Y+20Fgfn8mSWPp6jy1zAjp2oY4XKTRj5vLvtksHcqnUu4KjIyj3e5sPxWV7tXdRPpBdNd7qy8iNhU0K5F4jQ7L2cc9smyI6P6J0q6ef15haoWGIbh9HSc7YLd7HiahpM/wsIuKnX/6uNuLrC8OgH7Twzz+LpkaOhjixfYXsAdTw1M86iiJMp1Nypm8Yt45feYJQ+fBw7l08jd/CDZLx+/Xn2yTfmhhWuLstkNoButK0jAn+L9nVzyQ7+6VkkSeYcjb1glzDLDvZtYct2Nsln8gk3c+fY4GXNVdhwGG88ltdZbDN1ssYDtX8TM8tNwcSXbLs9Sl/j1CTo/9Au+Ga0WzL5tXUSNe97ce4+jhNjd/sOZMtejKm1bRoUx4omoxSZzDHBFVOpuUMF1N5PmiMh1N80Rsfnu5p1niwsdggYKuOxm1ByPyrXF5oioVUosBP/n0D9pjLt5501ic0TkuxsNzu7AQY/rbpozi5xyshYnsOCA726a41G57qY5IvJoeHPyRS4Nb07o7/FEbA5H7XEkfJs0x6PyRBw2RkRek1+DbPGdJ2JzZpHrUcPGzOKAI2GDROQmU80JGoPm03CuRx3pce0IArj5YtiYWfwfFPy5HNVRPTI0cGzR0eFcWSQMqmyxSQJWhn6BW+uU4Majot2foA0G5f5Ip2Ez+IUeK2KzbLAAEzSaKSBT2EC9bVYrDH5mUfopQRLxfWJAE50MxWUWm2qDBYymC9iiRYsWLVq0aNGiRQvl+A/qO4eO8xaNfgAAAABJRU5ErkJggg=="/>
            <a href="signup.html">
                <img src="data:image/png;base64,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"/>
            </a>
            <a href="./wishlist.html">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNzlqjNpos-LJ0RhGqmgNfXKzBXWFOfdzpBw&usqp=CAU"/>
            <a href="./viewcart.html">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblGiUFFJlyg_81BPr4FxJMn1lzPElspob_w&usqp=CAU"/>
            </div>
 
        </div>
    
    <div id="line"></div>`
}

export default navbar;