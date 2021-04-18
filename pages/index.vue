<template>
  <div class="container mx-auto">
    <h1>Death Stranding Materilas</h1>
    <div>
      <table>
        <thead>
          <tr>
            <th>Material</th>
            <th>Require</th>
            <th>Filled</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="material in materials" :key="material.name">
            <td>{{ material.name }}</td>
            <td>
              <input
                v-model="material.require.value"
                type="number"
                class="text-right"
              />
            </td>
            <td>
              <input
                v-model="material.filled.value"
                type="number"
                class="text-right"
              />
            </td>
            <td v-if="material.require.value - material.filled.value > 5000">
              Too big
            </td>
            <td v-else-if="material.require.value - material.filled.value > 0">
              {{
                payment(
                  material.require.value - material.filled.value,
                  material.unit
                )
              }}
            </td>
            <td v-else></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from '@nuxtjs/composition-api'
import { payment } from '@/src/payment'

interface Material {
  name: string
  unit: number[]
  require: Ref<number>
  filled: Ref<number>
}

export default defineComponent({
  setup() {
    const materials: Material[] = [
      {
        name: 'Resins',
        unit: [40, 80, 160, 320, 480, 640, 800],
        require: ref(0),
        filled: ref(0),
      },
      {
        name: 'Metals',
        unit: [50, 100, 200, 400, 600, 800, 1000],
        require: ref(0),
        filled: ref(0),
      },
      {
        name: 'Ceramics',
        unit: [40, 80, 160, 320, 480, 640, 800],
        require: ref(0),
        filled: ref(0),
      },
      {
        name: 'Chemicals',
        unit: [30, 60, 120, 240, 360, 480, 600],
        require: ref(0),
        filled: ref(0),
      },
      {
        name: 'Special Alloys',
        unit: [60, 120, 240, 480, 720, 960, 1200],
        require: ref(0),
        filled: ref(0),
      },
    ]

    return {
      materials,
      payment,
    }
  },
})
</script>
