<template>
    <div>
        <FaqQuestion @questionClicked="toggleAnswer" >
          <div>
            This is the question
          </div>
        </FaqQuestion>

        <FaqAnswer :class="answerRevealed ? 'block' : 'hidden'">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iusto magnam odio atque ullam impedit molestiae provident natus sed blanditiis. Blanditiis est modi maiores, corrupti at nisi praesentium dicta quam!
          </div>
        </FaqAnswer>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>