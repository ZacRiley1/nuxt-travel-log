<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";

import { InsertLocation } from "~/lib/db/schema";

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(InsertLocation),
});
const onSubmit = handleSubmit((values) => {
  console.log("Form submitted with values:", values);
});

effect(() => {
  console.error(toRaw(errors.value));
});

function closeModal() {

  // resetForm();
  // router.replace("/dashboard/locations");
  // resetForm();
}
</script>

<template>
  <Form class="space-y-4" @submit.prevent="onSubmit">
    <fieldset class="fieldset">
      <legend class="fieldset-legend">
        Name
      </legend>
      <Field
        name="name"
        type="text"
        class="input input-bordered w-full"
        placeholder="Name"
        :class="errors.name ? 'input-error' : ''"
      />
      <p v-if="errors.name" class="fieldset-label text-error text-sm mt-1">
        {{ errors.name }}
      </p>
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">
        Description
      </legend>
      <Field
        name="description"
        type="textarea"
        class="textarea textarea-bordered w-full"
        placeholder="Description"
        :class="errors.description ? 'input-error' : ''"
      />
      <p v-if="errors.description" class="fieldset-label text-error text-sm mt-1">
        {{ errors.description }}
      </p>
    </fieldset>
    <fieldset class="fieldset flex gap-2">
      <legend class="fieldset-legend">
        Latitude and Longitude
      </legend>
      <div>
        <Field
          name="lat"
          type="number"
          class="input input-bordered w-full"
          placeholder="Latitude"
          :class="errors.lat ? 'input-error' : ''"
        />
        <p v-if="errors.lat" class="fieldset-label text-error text-sm flex-1 mt-1">
          {{ errors.lat }}
        </p>
      </div>
      <div>
        <Field
          name="long"
          type="number"
          class="input input-bordered w-full"
          placeholder="Longitude"
          :class="errors.long ? 'input-error' : ''"
        />
        <p v-if="errors.long" class="fieldset-label text-error text-sm flex-1 mt-1">
          {{ errors.long }}
        </p>
      </div>
    </fieldset>

    <div class="mt-4 flex justify-end gap-2">
      <button
        type="button"
        class="btn"
        @click="closeModal"
      >
        Cancel
      </button>
      <button type="submit" class="btn btn-primary">
        Save
      </button>
    </div>
  </Form>
</template>

<style scoped>

</style>
