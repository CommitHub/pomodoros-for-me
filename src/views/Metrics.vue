<template>
  <section id="metrics">
    <h1>Metrics</h1>
    {{ pomodoros }}
  </section>
</template>

<script>
import db from "../firebase/firebaseInit.js";

export default {
  name: "metrics",
  data() {
    return {
      pomodoros: []
    };
  },
  created() {
    db.collection("pomodoros")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            date: doc.data().date,
            types: doc.data().types,
            amount: doc.data().amount
          };

          this.pomodoros.push(data);
        });
      });
  }
};
</script>
