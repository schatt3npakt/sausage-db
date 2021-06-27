<template>
  <canvas id="sausageReelCanvas"></canvas>
  <button @click="clickHandler" class="sausage-reel"></button>
  <div class="sausage-reel__text">
    <div
        class="sausage-reel__text__item"
        v-for="sausage in sausages"
        :key="sausage.id"
    >
      <h4 class="sausage-reel__headline">{{ sausage.type }}</h4>
      <p class="sausage-reel__quote">Dolor sit amet</p>
      <p class="sausage-reel__author">Ordinary Sausage, 04.04.1234</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      sausages: this.shuffleArray(this.sausageData)
    }
  },
  methods: {
    animateTexts: function () {
      const currentTextItemClass = 'sausage-reel__text__item--current';
      let textObjectCollection = document.querySelectorAll('.sausage-reel__text__item')

      for (let item of textObjectCollection) {
        item.classList.add(currentTextItemClass)
      }
    },
    clickHandler: function () {
      this.toggleIsActiveClassPage()
      this.dropSausages()
      this.animateTexts()
    },
    // https://www.cssscript.com/basic-snowflakes-falling-effect-javascript-canvas-snow-js/
    dropSausages: function () {
      const sausageImageSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABgmlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz/GjxEjyiTKYhJWiFETKYuRX4XFzCi/Nm+e+aHmzbzem0mTrbJVlNj4teAvYKuslSJSslPWxAY953lqJHNu557P/d57TveeC65IStXMsm7Q0lkjNBr0zczO+dyPVNCElwEaFNXUJ8MjEYra2w0ldrzqtGsVP/evVS/GTBVKKoUHVd3ICo8JTyxndZs3hb1qUlkUPhbuMOSCwte2HnX4yeaEwx82G5HQELjqhH2JXxz9xWrS0ITl5bRqqZz6cx/7JZ5YejossUW8GZMQowTxMc4wQwTooV/mAJ346ZIVRfK7v/OnyEiuKrNOHoMlEiTJ0iFqTqrHJMZFj8lIkbf7/7evZrzX71T3BKH8wbJe2sC9AZ/rlvW+b1mfB1B6D2fpQn5mD/peRV8vaK27ULsKJ+cFLboFp2vQeKcrhvItlYq74nF4PoKaWai/hKp5p2c/+xzeQmRFvuoCtnegXc7XLnwBtHBoCTwhlPMAAAAJcEhZcwAAQJcAAECXAeCX1DsAAAM5SURBVFiFtZddSBRRFIC/u7q7utkPlaBRimWRUFjgS0SQhZBGb74EQUEQBPPii9DDPMQQFAQGDRQE9dBDEEQPVkQQVARBPw9CIEGSUpkmFP2suu66t4c7MztzZ3bdbDovy545d853zzn3nDuCCJGG1Qu0AjPAhLDN11F2cYjQHPcDZ4Ddmt0j4LywzSf/DUAa1gngehQYIB1dd9wQCcf5Qce5iHDuAklgME7nHgAwEHCcErCtDtrSfq0ADknDOvo/ADpQO1Sazgy0pGBLGlrT+prTsQJIwxLAZty91idgdU3JYnMakl4YBLBPGtbO2ACADO7uAWpE2KIpqa+LLQ0JYZtZ4IenmS/6cZRsCABIoD82AOd3FNftgoRvhaDVyhpocE0RQLs0rL44AW7jr/fJfNiyOaVrzsUJcAt/4GfyUNDy0Jz014cAdknDMmIBELY5DTz0IIrAtBaFlID2wJGUwGVpWAf+GcCRayyVho0p/xF1bS9Iw2r7ZwBhm3eBKe/Jj0XIFoPWAuio15t1F3BzuRAJ7X+wFt7Nh1c0JGBrna7dCzyXhnU4DoCSfCvAl4hUtKT0egBoBoalYV2RhtVdLUBo8knDOguY3rOkgD0Nqgh1Gc/B+1zoFc7aCWAYtalxYZuT1QIIYAwo5bQpCTvqo7cwnVepWtDbp5dKd5T/BJ4CQ/47RdTsx+ly9wLPOzPQWBsNkZcKYioiXWEggEFhmxfLAjgQV4FTno07pteVgQCYK6qITBfg12IlGIABYZuXKgGsQaViraesBsKV2SJ8zaujnJPwveCPgQQ+Am1lARyIPuA+pcL6Owgd6O0c/AxE5ph+DAMibPMBavS6haTa9MgsfMiFx3YlySRgU2ig9VYEcCDuREKM5eBlVt9RZVkfiJoEWpcE0CCC8msRXmVhdD7ctqMkWJgCmKgKwAfRAzxDL6fPC/DiN7zJqqMY7glKwsd0pGIRlhPnHnAZf3HqsiIBq2pUB00l1PEMpksCLcsCcCD2o74njvjU1b5PAjeEbZ5cNoAPpAt1Sz6Ov2eUh/GcVzJaDkitA9KDuiNs10Ak8Ak1C4aWoowDqBH1id8MNKI+8x/rdn8A/TQJQ7P3ONIAAAAASUVORK5CYII="

      let ctx
      let canvasHeight = window.innerHeight
      let canvasWidth = window.innerWidth
      let canvas = document.getElementById("sausageReelCanvas")
      let maximumSausages = 250
      let sausageImage = new Image()
      let sausages = []

      ctx = canvas.getContext("2d");
      canvas.height = canvasHeight
      canvas.width = canvasWidth
      sausageImage.src = sausageImageSrc
      canvas.height = canvasHeight;
      canvas.width = canvasWidth;

      if (sessionStorage.getItem("animationRunning") === "true") {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight)
        sessionStorage.setItem("animationRunning", "false")
        return
      } else {
        sessionStorage.setItem("animationRunning", "true")
      }

      for(let i = 0; i < maximumSausages; i++) {
        let speed = Math.random() + 1
        sausages.push({
          speed: speed,
          rotation: getRandomInt(1, 360),
          rotationDirection: Math.round(Math.random()),
          size: speed * 17,
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight - canvasHeight
        })
      }

      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }

      function drawSausages() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight)

        for(let i = 0; i < maximumSausages; i++){
          let sausage = sausages[i];
          let rotationRadians = sausage.rotation * Math.PI / 180
          ctx.save();
          ctx.translate(sausage.x, sausage.y);
          if (sausage.rotationDirection === 1) {
            ctx.rotate(rotationRadians)
          } else {
            ctx.rotate(rotationRadians * -1)
          }
          ctx.drawImage(sausageImage, -sausage.size / 2, -sausage.size / 2, sausage.size, sausage.size);
          ctx.restore();
        }
        moveSausages()
      }

      function moveSausages() {
        for(let i = 0; i < maximumSausages; i++) {
          let sausage = sausages[i]

          sausage.y += Math.pow(sausage.speed, 2) - 0.5;
          sausage.rotation += 1

          if (sausage.y > canvasHeight + 50) {
            sausages[i] = {
              rotation: getRandomInt(1, 360),
              rotationDirection: Math.round(Math.random()),
              speed: sausage.speed,
              size: sausage.size,
              x: Math.random()*canvasWidth,
              y: -50
            }
          }
        }
      }

      function animationStep () {
        if (sessionStorage.getItem("animationRunning") === "false") return
        drawSausages()
        window.requestAnimationFrame(animationStep);
      }

      window.requestAnimationFrame(animationStep)
    },

    shuffleArray: function (array) {
      let currentIndex = array.length,  randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
    },

    toggleIsActiveClassPage: function () {
      const activeClass = 'site-wrapper__sausage-reel--active'
      let site = document.getElementById('siteWrapper')

      if (site.classList.contains(activeClass)) {
        site.classList.remove(activeClass)
      } else {
        site.classList.add(activeClass)
      }
    }
  },
  mounted: function () {
    sessionStorage.setItem("animationRunning", "false")
  },
  props: {
    sausageData: Array
  },
  name: 'SausageReel'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda&display=swap');

.sausage-reel {
  background-color: var(--light-mode-table-bg-color);
  background-image: url("data:image/png;base64,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");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 35px 35px;
  border-radius: 999px;
  border: none;
  bottom: 20px;
  box-shadow: 0 0 15px 0 var(--light-mode-search-bar-submit-bg-color);
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: 'Nunito', 'Arial', sans-serif;
  font-size: 12px;
  font-weight: 700;
  height: 72px;
  letter-spacing: 2px;
  opacity: 1;
  position: fixed;
  left: 20px;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.25s ease-out, opacity 0.25s ease-out, transform 0.25s ease-out;
  width: 72px;
  z-index: 3;
}

.sausage-reel--disabled {
  background-color: #c3c3c3;
}

.sausage-reel:active,
.sausage-reel:hover,
.sausage-reel:focus {
  background-color: var(--light-mode-button-hover-bg-color);
}

.sausage-reel:active {
  transform: scale(0.95);
}

.sausage-reel__text__item {
  font-family: 'Bodoni Moda', serif;
  opacity: 0;
  left: 50%;
  pointer-events: none;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 1s ease-in-out;
  z-index: 5;
}

.sausage-reel__text__item--current {
  color: white;
  font-size: 60px;
  opacity: 1;
  pointer-events: auto;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}

.sausage-reel__text__item * {
  font-family: 'Bodoni Moda', serif !important;
}

#sausageReelCanvas {
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  z-index: 2;
}
</style>
