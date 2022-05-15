<script setup lang="ts">
import { useLogger } from '/@/composables/useLogger'

defineProps({
  size: {
    type: String,
    default: '1rem',
    validator: val => {
      const { logError } = useLogger()
      const REGEX = /^([0-9]*\.?[0-9]+)(em|rem|px|%|)$/
      const valid = REGEX.test(val as string)

      if (!valid) {
        logError(`Invalid size specified "${val}". Valid units are em|rem|px|%`)
      }
      return valid
    },
  },
})
</script>
<template>
  <i class="as-particle-loader">
    <svg
      id="el_cwYysRMuh"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      :width="size"
      fill="currentColor"
      viewBox="0 0 512 512"
      style="enable-background: new 0 0 512 512"
      xml:space="preserve"
    >
      <g
        id="el_K14KZpaUUf_an_uzCRZV8LL"
        data-animator-group="true"
        data-animator-type="0"
      >
        <g
          id="el_K14KZpaUUf_an_s-u7Qoaha"
          data-animator-group="true"
          data-animator-type="1"
        >
          <g
            id="el_K14KZpaUUf_an_Uii2MvB3j"
            data-animator-group="true"
            data-animator-type="2"
          >
            <rect id="el_K14KZpaUUf" x="235" y="252" width="43" height="8" />
          </g>
        </g>
      </g>
      <g
        id="el_8vVe818fyI_an_i79dpGMUM"
        data-animator-group="true"
        data-animator-type="0"
      >
        <g
          id="el_8vVe818fyI_an_RqXqcMwvz"
          data-animator-group="true"
          data-animator-type="1"
        >
          <g
            id="el_8vVe818fyI_an__bExq-HgO"
            data-animator-group="true"
            data-animator-type="2"
          >
            <rect id="el_8vVe818fyI" x="235" y="252" width="43" height="8" />
          </g>
        </g>
      </g>
      <g
        id="el_342UfSpg1o_an_mHoePAwO8"
        data-animator-group="true"
        data-animator-type="0"
      >
        <g
          id="el_342UfSpg1o_an_fGrKAUpn5"
          data-animator-group="true"
          data-animator-type="1"
        >
          <g
            id="el_342UfSpg1o_an_Lwb52Ncdm"
            data-animator-group="true"
            data-animator-type="2"
          >
            <rect id="el_342UfSpg1o" x="235" y="252" width="43" height="8" />
          </g>
        </g>
      </g>
      <g
        id="el_vOa8NPJOyR_an_dbg0acckc"
        data-animator-group="true"
        data-animator-type="0"
      >
        <g
          id="el_vOa8NPJOyR_an_a65BtQ09x"
          data-animator-group="true"
          data-animator-type="1"
        >
          <g
            id="el_vOa8NPJOyR_an_7sn-8duPi"
            data-animator-group="true"
            data-animator-type="2"
          >
            <rect id="el_vOa8NPJOyR" x="235" y="252" width="43" height="8" />
          </g>
        </g>
      </g>
      <g
        id="el_KGuutbv_2N_an_hlYQCkG6S"
        data-animator-group="true"
        data-animator-type="0"
      >
        <g
          id="el_KGuutbv_2N_an_OQiHzDTaJ"
          data-animator-group="true"
          data-animator-type="1"
        >
          <g
            id="el_KGuutbv_2N_an_fmnda5309"
            data-animator-group="true"
            data-animator-type="2"
          >
            <rect id="el_KGuutbv_2N" x="235" y="252" width="43" height="8" />
          </g>
        </g>
      </g>
      <g
        id="el_DZNZsi7r4u_an_EKe1640e7"
        data-animator-group="true"
        data-animator-type="0"
      >
        <circle id="el_DZNZsi7r4u" cx="256.5" cy="255.5" r="22.5" />
      </g>
      <g
        id="el_UTiwSL6G_B_an_8H8J4qQkh"
        data-animator-group="true"
        data-animator-type="0"
      >
        <circle id="el_UTiwSL6G_B" cx="256.5" cy="255.5" r="22.5" />
      </g>
      <g
        id="el_RD1ROxlE21_an_5QZ2F-FOJ"
        data-animator-group="true"
        data-animator-type="0"
      >
        <circle id="el_RD1ROxlE21" cx="256.5" cy="255.5" r="22.5" />
      </g>
      <g
        id="el_MYcMc4Akv4_an_pzn4i-FHd"
        data-animator-group="true"
        data-animator-type="0"
      >
        <circle id="el_MYcMc4Akv4" cx="256.5" cy="255.5" r="22.5" />
      </g>
      <g
        id="el_6YotClCzoX_an_qmt3IGADS"
        data-animator-group="true"
        data-animator-type="0"
      >
        <circle id="el_6YotClCzoX" cx="256.5" cy="255.5" r="22.5" />
      </g>
    </svg>
  </i>
</template>

<style>
@-webkit-keyframes kf_el_KGuutbv_2N_an_OQiHzDTaJ {
  50% {
    -webkit-transform: translate(256.5px, 256px) rotate(52deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(52deg)
      translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) rotate(52deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(52deg)
      translate(-256.5px, -256px);
  }
  0% {
    -webkit-transform: translate(256.5px, 256px) rotate(52deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(52deg)
      translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) rotate(52deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(52deg)
      translate(-256.5px, -256px);
  }
}
@keyframes kf_el_KGuutbv_2N_an_OQiHzDTaJ {
  50% {
    -webkit-transform: translate(256.5px, 256px) rotate(52deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(52deg)
      translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) rotate(52deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(52deg)
      translate(-256.5px, -256px);
  }
  0% {
    -webkit-transform: translate(256.5px, 256px) rotate(52deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(52deg)
      translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) rotate(52deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(52deg)
      translate(-256.5px, -256px);
  }
}
@-webkit-keyframes kf_el_KGuutbv_2N_an_fmnda5309 {
  50% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) scale(5, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(5, 1) translate(-256.5px, -256px);
  }
  72.22% {
    -webkit-transform: translate(256.5px, 256px) scale(2, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(2, 1) translate(-256.5px, -256px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  0% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
}
@keyframes kf_el_KGuutbv_2N_an_fmnda5309 {
  50% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) scale(5, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(5, 1) translate(-256.5px, -256px);
  }
  72.22% {
    -webkit-transform: translate(256.5px, 256px) scale(2, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(2, 1) translate(-256.5px, -256px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  0% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
}
@-webkit-keyframes kf_el_K14KZpaUUf_an_uzCRZV8LL {
  0% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 10px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 10px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 35px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 35px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(22px, 22px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(22px, 22px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-30px, 65px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-30px, 65px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
}
@keyframes kf_el_K14KZpaUUf_an_uzCRZV8LL {
  0% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 10px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 10px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 35px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 35px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(22px, 22px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(22px, 22px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-30px, 65px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-30px, 65px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
}
@-webkit-keyframes kf_el_vOa8NPJOyR_an_7sn-8duPi {
  33.33% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) scale(4.6, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(4.6, 1)
      translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) scale(4, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(4, 1) translate(-256.5px, -256px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  0% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
}
@keyframes kf_el_vOa8NPJOyR_an_7sn-8duPi {
  33.33% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) scale(4.6, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(4.6, 1)
      translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) scale(4, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(4, 1) translate(-256.5px, -256px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  0% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
}
@-webkit-keyframes kf_el_vOa8NPJOyR_an_a65BtQ09x {
  33.33% {
    -webkit-transform: translate(256.5px, 256px) rotate(80deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(80deg)
      translate(-256.5px, -256px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) rotate(82deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(82deg)
      translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) rotate(135deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(135deg)
      translate(-256.5px, -256px);
  }
  0% {
    -webkit-transform: translate(256.5px, 256px) rotate(80deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(80deg)
      translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) rotate(135deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(135deg)
      translate(-256.5px, -256px);
  }
}
@keyframes kf_el_vOa8NPJOyR_an_a65BtQ09x {
  33.33% {
    -webkit-transform: translate(256.5px, 256px) rotate(80deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(80deg)
      translate(-256.5px, -256px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) rotate(82deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(82deg)
      translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) rotate(135deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(135deg)
      translate(-256.5px, -256px);
  }
  0% {
    -webkit-transform: translate(256.5px, 256px) rotate(80deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(80deg)
      translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) rotate(135deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(135deg)
      translate(-256.5px, -256px);
  }
}
@-webkit-keyframes kf_el_342UfSpg1o_an_fGrKAUpn5 {
  0% {
    -webkit-transform: translate(256.5px, 256px) rotate(0deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(0deg)
      translate(-256.5px, -256px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 256px) rotate(-8deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-8deg)
      translate(-256.5px, -256px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) rotate(54deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(54deg)
      translate(-256.5px, -256px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) rotate(-7deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-7deg)
      translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) rotate(-17deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-17deg)
      translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) rotate(-17deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-17deg)
      translate(-256.5px, -256px);
  }
}
@keyframes kf_el_342UfSpg1o_an_fGrKAUpn5 {
  0% {
    -webkit-transform: translate(256.5px, 256px) rotate(0deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(0deg)
      translate(-256.5px, -256px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 256px) rotate(-8deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-8deg)
      translate(-256.5px, -256px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) rotate(54deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(54deg)
      translate(-256.5px, -256px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) rotate(-7deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-7deg)
      translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) rotate(-17deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-17deg)
      translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) rotate(-17deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-17deg)
      translate(-256.5px, -256px);
  }
}
@-webkit-keyframes kf_el_342UfSpg1o_an_Lwb52Ncdm {
  0% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 256px) scale(4.7, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(4.7, 1)
      translate(-256.5px, -256px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) scale(6, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(6, 1) translate(-256.5px, -256px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) scale(4.2, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(4.2, 1)
      translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) scale(6, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(6, 1) translate(-256.5px, -256px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
}
@keyframes kf_el_342UfSpg1o_an_Lwb52Ncdm {
  0% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 256px) scale(4.7, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(4.7, 1)
      translate(-256.5px, -256px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) scale(6, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(6, 1) translate(-256.5px, -256px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) scale(4.2, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(4.2, 1)
      translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) scale(6, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(6, 1) translate(-256.5px, -256px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
}
@-webkit-keyframes kf_el_8vVe818fyI_an__bExq-HgO {
  16.67% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) scale(4.5, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(4.5, 1)
      translate(-256.5px, -256px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) scale(4.5, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(4.5, 1)
      translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) scale(5, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(5, 1) translate(-256.5px, -256px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  0% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
}
@keyframes kf_el_8vVe818fyI_an__bExq-HgO {
  16.67% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) scale(4.5, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(4.5, 1)
      translate(-256.5px, -256px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) scale(4.5, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(4.5, 1)
      translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) scale(5, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(5, 1) translate(-256.5px, -256px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  0% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
}
@-webkit-keyframes kf_el_8vVe818fyI_an_RqXqcMwvz {
  16.67% {
    -webkit-transform: translate(256.5px, 256px) rotate(-73deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-73deg)
      translate(-256.5px, -256px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) rotate(-73deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-73deg)
      translate(-256.5px, -256px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) rotate(-73deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-73deg)
      translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) rotate(-110deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-110deg)
      translate(-256.5px, -256px);
  }
  0% {
    -webkit-transform: translate(256.5px, 256px) rotate(-73deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-73deg)
      translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) rotate(-110deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-110deg)
      translate(-256.5px, -256px);
  }
}
@keyframes kf_el_8vVe818fyI_an_RqXqcMwvz {
  16.67% {
    -webkit-transform: translate(256.5px, 256px) rotate(-73deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-73deg)
      translate(-256.5px, -256px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) rotate(-73deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-73deg)
      translate(-256.5px, -256px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) rotate(-73deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-73deg)
      translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) rotate(-110deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-110deg)
      translate(-256.5px, -256px);
  }
  0% {
    -webkit-transform: translate(256.5px, 256px) rotate(-73deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-73deg)
      translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) rotate(-110deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-110deg)
      translate(-256.5px, -256px);
  }
}
@-webkit-keyframes kf_el_KGuutbv_2N_an_hlYQCkG6S {
  0% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(100px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(100px, 0px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(100px, 50px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(100px, 50px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(125px, -169px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(125px, -169px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(119px, -142px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(119px, -142px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
}
@keyframes kf_el_KGuutbv_2N_an_hlYQCkG6S {
  0% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(100px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(100px, 0px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(100px, 50px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(100px, 50px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(125px, -169px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(125px, -169px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(119px, -142px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(119px, -142px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
}
@-webkit-keyframes kf_el_vOa8NPJOyR_an_dbg0acckc {
  0% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(100px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(100px, 0px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(100px, 50px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(100px, 50px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(136px, -77px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(136px, -77px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(136px, 10px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(136px, 10px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
}
@keyframes kf_el_vOa8NPJOyR_an_dbg0acckc {
  0% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(100px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(100px, 0px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(100px, 50px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(100px, 50px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(136px, -77px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(136px, -77px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(136px, 10px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(136px, 10px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
}
@-webkit-keyframes kf_el_342UfSpg1o_an_mHoePAwO8 {
  0% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 10px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 10px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(27px, -50px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(27px, -50px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(37px, -159px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(37px, -159px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-74px, -188px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-74px, -188px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
}
@keyframes kf_el_342UfSpg1o_an_mHoePAwO8 {
  0% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 10px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 10px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(27px, -50px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(27px, -50px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(37px, -159px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(37px, -159px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-74px, -188px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-74px, -188px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
}
@-webkit-keyframes kf_el_8vVe818fyI_an_i79dpGMUM {
  0% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-100px, 25px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-100px, 25px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-77px, -63px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-77px, -63px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-77px, -63px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-77px, -63px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-167px, -43px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-167px, -43px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
}
@keyframes kf_el_8vVe818fyI_an_i79dpGMUM {
  0% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-100px, 25px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-100px, 25px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-77px, -63px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-77px, -63px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-77px, -63px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-77px, -63px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-167px, -43px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(-167px, -43px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
    transform: translate(256.5px, 256px) translate(-256.5px, -256px)
      translate(0px, 0px);
  }
}
@-webkit-keyframes kf_el_6YotClCzoX_an_qmt3IGADS {
  0% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-100px, 25px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-100px, 25px);
  }
  50% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-100px, 25px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-100px, 25px);
  }
  66.67% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-131px, 60px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-131px, 60px);
  }
  83.33% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
  }
}
@keyframes kf_el_6YotClCzoX_an_qmt3IGADS {
  0% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-100px, 25px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-100px, 25px);
  }
  50% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-100px, 25px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-100px, 25px);
  }
  66.67% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-131px, 60px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-131px, 60px);
  }
  83.33% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
  }
}
@-webkit-keyframes kf_el_MYcMc4Akv4_an_pzn4i-FHd {
  0% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-100px, 25px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-100px, 25px);
  }
  33.33% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-50px, -150px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-50px, -150px);
  }
  50% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-50px, -150px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-50px, -150px);
  }
  66.67% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-200px, -150px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-200px, -150px);
  }
  83.33% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
  }
}
@keyframes kf_el_MYcMc4Akv4_an_pzn4i-FHd {
  0% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-100px, 25px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-100px, 25px);
  }
  33.33% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-50px, -150px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-50px, -150px);
  }
  50% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-50px, -150px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-50px, -150px);
  }
  66.67% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-200px, -150px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(-200px, -150px);
  }
  83.33% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
  }
}
@-webkit-keyframes kf_el_RD1ROxlE21_an_5QZ2F-FOJ {
  0% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(100px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(100px, 0px);
  }
  33.33% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(100px, 50px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(100px, 50px);
  }
  50% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(125px, -169px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(125px, -169px);
  }
  66.67% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(190px, -50px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(190px, -50px);
  }
  83.33% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
  }
}
@keyframes kf_el_RD1ROxlE21_an_5QZ2F-FOJ {
  0% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(100px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(100px, 0px);
  }
  33.33% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(100px, 50px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(100px, 50px);
  }
  50% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(125px, -169px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(125px, -169px);
  }
  66.67% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(190px, -50px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(190px, -50px);
  }
  83.33% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
    transform: translate(234px, 233px) translate(-234px, -233px)
      translate(0px, 0px);
  }
}
@-webkit-keyframes kf_el_UTiwSL6G_B_an_8H8J4qQkh {
  0% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(100px, 0px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(100px, 0px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(100px, 50px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(100px, 50px);
  }
  50% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(125px, -169px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(125px, -169px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(50px, -223px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(50px, -223px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
  }
}
@keyframes kf_el_UTiwSL6G_B_an_8H8J4qQkh {
  0% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(100px, 0px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(100px, 0px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(100px, 50px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(100px, 50px);
  }
  50% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(125px, -169px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(125px, -169px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(50px, -223px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(50px, -223px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
  }
}
@-webkit-keyframes kf_el_DZNZsi7r4u_an_EKe1640e7 {
  0% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(100px, 0px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(100px, 0px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(100px, 50px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(100px, 50px);
  }
  50% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(150px, 20px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(150px, 20px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(75px, 75px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(75px, 75px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
  }
}
@keyframes kf_el_DZNZsi7r4u_an_EKe1640e7 {
  0% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(100px, 0px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(100px, 0px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(100px, 50px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(100px, 50px);
  }
  50% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(150px, 20px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(150px, 20px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(75px, 75px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(75px, 75px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
    transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
      translate(0px, 0px);
  }
}
@-webkit-keyframes kf_el_K14KZpaUUf_an_s-u7Qoaha {
  0% {
    -webkit-transform: translate(256.5px, 256px) rotate(0deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(0deg)
      translate(-256.5px, -256px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 256px) rotate(-8deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-8deg)
      translate(-256.5px, -256px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) rotate(7deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(7deg)
      translate(-256.5px, -256px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) rotate(-2deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-2deg)
      translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) rotate(4deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(4deg)
      translate(-256.5px, -256px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) rotate(0deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(0deg)
      translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) rotate(0deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(0deg)
      translate(-256.5px, -256px);
  }
}
@keyframes kf_el_K14KZpaUUf_an_s-u7Qoaha {
  0% {
    -webkit-transform: translate(256.5px, 256px) rotate(0deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(0deg)
      translate(-256.5px, -256px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 256px) rotate(-8deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-8deg)
      translate(-256.5px, -256px);
  }
  33.33% {
    -webkit-transform: translate(256.5px, 256px) rotate(7deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(7deg)
      translate(-256.5px, -256px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) rotate(-2deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(-2deg)
      translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) rotate(4deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(4deg)
      translate(-256.5px, -256px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) rotate(0deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(0deg)
      translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) rotate(0deg)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) rotate(0deg)
      translate(-256.5px, -256px);
  }
}
@-webkit-keyframes kf_el_K14KZpaUUf_an_Uii2MvB3j {
  0% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 256px) scale(4.7, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(4.7, 1)
      translate(-256.5px, -256px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) scale(6, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(6, 1) translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) scale(5, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(5, 1) translate(-256.5px, -256px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
}
@keyframes kf_el_K14KZpaUUf_an_Uii2MvB3j {
  0% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  16.67% {
    -webkit-transform: translate(256.5px, 256px) scale(4.7, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(4.7, 1)
      translate(-256.5px, -256px);
  }
  50% {
    -webkit-transform: translate(256.5px, 256px) scale(6, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(6, 1) translate(-256.5px, -256px);
  }
  66.67% {
    -webkit-transform: translate(256.5px, 256px) scale(5, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(5, 1) translate(-256.5px, -256px);
  }
  83.33% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
  100% {
    -webkit-transform: translate(256.5px, 256px) scale(1, 1)
      translate(-256.5px, -256px);
    transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  }
}
#el_cwYysRMuh * {
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);
  animation-timing-function: cubic-bezier(0, 0, 1, 1);
}
#el_K14KZpaUUf_an_Uii2MvB3j {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-transform: translate(256.5px, 256px) scale(1, 1)
    translate(-256.5px, -256px);
  transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  -webkit-animation-name: kf_el_K14KZpaUUf_an_Uii2MvB3j;
  animation-name: kf_el_K14KZpaUUf_an_Uii2MvB3j;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
}
#el_K14KZpaUUf_an_s-u7Qoaha {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-transform: translate(256.5px, 256px) rotate(0deg)
    translate(-256.5px, -256px);
  transform: translate(256.5px, 256px) rotate(0deg) translate(-256.5px, -256px);
  -webkit-animation-name: kf_el_K14KZpaUUf_an_s-u7Qoaha;
  animation-name: kf_el_K14KZpaUUf_an_s-u7Qoaha;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
}
#el_K14KZpaUUf_an_uzCRZV8LL {
  -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
    translate(0px, 0px);
  transform: translate(256.5px, 256px) translate(-256.5px, -256px)
    translate(0px, 0px);
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-animation-name: kf_el_K14KZpaUUf_an_uzCRZV8LL;
  animation-name: kf_el_K14KZpaUUf_an_uzCRZV8LL;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
}
#el_DZNZsi7r4u_an_EKe1640e7 {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
    translate(0px, 0px);
  transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
    translate(0px, 0px);
  -webkit-animation-name: kf_el_DZNZsi7r4u_an_EKe1640e7;
  animation-name: kf_el_DZNZsi7r4u_an_EKe1640e7;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
}
#el_UTiwSL6G_B_an_8H8J4qQkh {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
    translate(0px, 0px);
  transform: translate(256.5px, 255.5px) translate(-256.5px, -255.5px)
    translate(0px, 0px);
  -webkit-animation-name: kf_el_UTiwSL6G_B_an_8H8J4qQkh;
  animation-name: kf_el_UTiwSL6G_B_an_8H8J4qQkh;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
}
#el_RD1ROxlE21_an_5QZ2F-FOJ {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
    translate(0px, 0px);
  transform: translate(234px, 233px) translate(-234px, -233px)
    translate(0px, 0px);
  -webkit-animation-name: kf_el_RD1ROxlE21_an_5QZ2F-FOJ;
  animation-name: kf_el_RD1ROxlE21_an_5QZ2F-FOJ;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
}
#el_MYcMc4Akv4_an_pzn4i-FHd {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
    translate(0px, 0px);
  transform: translate(234px, 233px) translate(-234px, -233px)
    translate(0px, 0px);
  -webkit-animation-name: kf_el_MYcMc4Akv4_an_pzn4i-FHd;
  animation-name: kf_el_MYcMc4Akv4_an_pzn4i-FHd;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
}
#el_6YotClCzoX_an_qmt3IGADS {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-transform: translate(234px, 233px) translate(-234px, -233px)
    translate(0px, 0px);
  transform: translate(234px, 233px) translate(-234px, -233px)
    translate(0px, 0px);
  -webkit-animation-name: kf_el_6YotClCzoX_an_qmt3IGADS;
  animation-name: kf_el_6YotClCzoX_an_qmt3IGADS;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
}
#el_8vVe818fyI_an_i79dpGMUM {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
    translate(0px, 0px);
  transform: translate(256.5px, 256px) translate(-256.5px, -256px)
    translate(0px, 0px);
  -webkit-animation-name: kf_el_8vVe818fyI_an_i79dpGMUM;
  animation-name: kf_el_8vVe818fyI_an_i79dpGMUM;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
}
#el_342UfSpg1o_an_mHoePAwO8 {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
    translate(0px, 0px);
  transform: translate(256.5px, 256px) translate(-256.5px, -256px)
    translate(0px, 0px);
  -webkit-animation-name: kf_el_342UfSpg1o_an_mHoePAwO8;
  animation-name: kf_el_342UfSpg1o_an_mHoePAwO8;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
}
#el_vOa8NPJOyR_an_dbg0acckc {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
    translate(0px, 0px);
  transform: translate(256.5px, 256px) translate(-256.5px, -256px)
    translate(0px, 0px);
  -webkit-animation-name: kf_el_vOa8NPJOyR_an_dbg0acckc;
  animation-name: kf_el_vOa8NPJOyR_an_dbg0acckc;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
}
#el_KGuutbv_2N_an_hlYQCkG6S {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-transform: translate(256.5px, 256px) translate(-256.5px, -256px)
    translate(0px, 0px);
  transform: translate(256.5px, 256px) translate(-256.5px, -256px)
    translate(0px, 0px);
  -webkit-animation-name: kf_el_KGuutbv_2N_an_hlYQCkG6S;
  animation-name: kf_el_KGuutbv_2N_an_hlYQCkG6S;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
}
#el_8vVe818fyI_an_RqXqcMwvz {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-transform: translate(256.5px, 256px) rotate(-73deg)
    translate(-256.5px, -256px);
  transform: translate(256.5px, 256px) rotate(-73deg)
    translate(-256.5px, -256px);
  -webkit-animation-name: kf_el_8vVe818fyI_an_RqXqcMwvz;
  animation-name: kf_el_8vVe818fyI_an_RqXqcMwvz;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
}
#el_8vVe818fyI_an__bExq-HgO {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-transform: translate(256.5px, 256px) scale(1, 1)
    translate(-256.5px, -256px);
  transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  -webkit-animation-name: kf_el_8vVe818fyI_an__bExq-HgO;
  animation-name: kf_el_8vVe818fyI_an__bExq-HgO;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
}
#el_342UfSpg1o_an_Lwb52Ncdm {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-transform: translate(256.5px, 256px) scale(1, 1)
    translate(-256.5px, -256px);
  transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  -webkit-animation-name: kf_el_342UfSpg1o_an_Lwb52Ncdm;
  animation-name: kf_el_342UfSpg1o_an_Lwb52Ncdm;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
}
#el_342UfSpg1o_an_fGrKAUpn5 {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-transform: translate(256.5px, 256px) rotate(0deg)
    translate(-256.5px, -256px);
  transform: translate(256.5px, 256px) rotate(0deg) translate(-256.5px, -256px);
  -webkit-animation-name: kf_el_342UfSpg1o_an_fGrKAUpn5;
  animation-name: kf_el_342UfSpg1o_an_fGrKAUpn5;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
}
#el_vOa8NPJOyR_an_a65BtQ09x {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-transform: translate(256.5px, 256px) rotate(80deg)
    translate(-256.5px, -256px);
  transform: translate(256.5px, 256px) rotate(80deg) translate(-256.5px, -256px);
  -webkit-animation-name: kf_el_vOa8NPJOyR_an_a65BtQ09x;
  animation-name: kf_el_vOa8NPJOyR_an_a65BtQ09x;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
}
#el_vOa8NPJOyR_an_7sn-8duPi {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-transform: translate(256.5px, 256px) scale(1, 1)
    translate(-256.5px, -256px);
  transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  -webkit-animation-name: kf_el_vOa8NPJOyR_an_7sn-8duPi;
  animation-name: kf_el_vOa8NPJOyR_an_7sn-8duPi;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
}
#el_KGuutbv_2N_an_fmnda5309 {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-transform: translate(256.5px, 256px) scale(1, 1)
    translate(-256.5px, -256px);
  transform: translate(256.5px, 256px) scale(1, 1) translate(-256.5px, -256px);
  -webkit-animation-name: kf_el_KGuutbv_2N_an_fmnda5309;
  animation-name: kf_el_KGuutbv_2N_an_fmnda5309;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);
  animation-timing-function: cubic-bezier(0, 0, 1, 1);
}
#el_KGuutbv_2N_an_OQiHzDTaJ {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-transform: translate(256.5px, 256px) rotate(52deg)
    translate(-256.5px, -256px);
  transform: translate(256.5px, 256px) rotate(52deg) translate(-256.5px, -256px);
  -webkit-animation-name: kf_el_KGuutbv_2N_an_OQiHzDTaJ;
  animation-name: kf_el_KGuutbv_2N_an_OQiHzDTaJ;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);
  animation-timing-function: cubic-bezier(0, 0, 1, 1);
}
</style>
