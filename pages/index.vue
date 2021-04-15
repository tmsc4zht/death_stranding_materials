<template>
  <div class="container mx-auto">
    <h1>Death Stranding Materilas</h1>
    <div>
      <table>
        <thead>
          <tr>
            <th>Material</th>
            <th>Require</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Resins</td>
            <td><input v-model="resins" type="number" class="text-right" /></td>
            <td>{{ resinsResult }}</td>
          </tr>
          <tr>
            <td>Metals</td>
            <td><input v-model="metals" type="number" class="text-right" /></td>
            <td>{{ metalsResult }}</td>
          </tr>
          <tr>
            <td>Ceramics</td>
            <td>
              <input v-model="ceramics" type="number" class="text-right" />
            </td>
            <td>{{ ceramicsResult }}</td>
          </tr>
          <tr>
            <td>Chemicals</td>
            <td>
              <input v-model="chemicals" type="number" class="text-right" />
            </td>
            <td>{{ chemicalsResult }}</td>
          </tr>
          <tr>
            <td>Special alloys</td>
            <td>
              <input v-model="specialAlloys" type="number" class="text-right" />
            </td>
            <td>{{ specialAlloysResult }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@nuxtjs/composition-api'
import { payment } from '@/src/payment'

const resinsUnit = [40, 80, 160, 320, 480, 640, 800]
const metalsUnit = [50, 100, 200, 400, 600, 800, 1000]
const ceramicsUnit = [40, 80, 160, 320, 480, 640, 800]
const chemicalsUnit = [30, 60, 120, 240, 360, 480, 600]
const specialAlloysUnit = [60, 120, 240, 480, 720, 960, 1200]

export default defineComponent({
  setup() {
    const resins = ref(0)
    const metals = ref(0)
    const ceramics = ref(0)
    const chemicals = ref(0)
    const specialAlloys = ref(0)

    const resinsResult = computed(() => {
      if (resins.value < 10000) {
        return payment(resins.value, resinsUnit)
      }
    })
    const metalsResult = computed(() => {
      if (metals.value < 10000) {
        return payment(metals.value, metalsUnit)
      }
    })
    const ceramicsResult = computed(() => {
      if (ceramics.value < 10000) {
        return payment(ceramics.value, ceramicsUnit)
      }
    })
    const chemicalsResult = computed(() => {
      if (chemicals.value < 10000) {
        return payment(chemicals.value, chemicalsUnit)
      }
    })
    const specialAlloysResult = computed(() => {
      if (specialAlloys.value < 10000) {
        return payment(specialAlloys.value, specialAlloysUnit)
      }
    })

    return {
      resins,
      resinsResult,
      metals,
      metalsResult,
      ceramics,
      ceramicsResult,
      chemicals,
      chemicalsResult,
      specialAlloys,
      specialAlloysResult,
    }
  },
})
</script>
