<script setup>
import useAuthenticationService from '../services/authentication-service.js'

const authenticationService = useAuthenticationService()
const user = authenticationService.user
</script>

<template>
  <h1 v-if="user">Welcome, {{ user.name }}!</h1>
  <h1 v-else>Welcome</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis orci at consectetur aliquet. Donec eget
    purus nec odio ultricies finibus nec a mauris. Proin mollis metus vel viverra tristique. Aenean dapibus, lorem vitae
    varius vulputate, sapien arcu gravida mi, id imperdiet tortor eros in lorem.
  </p>
  <p>
    Sed nibh risus, elementum eget lobortis vitae, euismod at metus. Suspendisse potenti. In diam erat, ultricies
    blandit justo molestie, blandit ornare ante. Etiam nec dapibus nibh. Sed rhoncus accumsan vestibulum. Duis rhoncus
    cursus dolor, ac cursus eros fringilla quis. Nullam eget tortor dignissim magna suscipit ullamcorper eget sit amet
    neque. Mauris pretium purus vitae interdum auctor. Curabitur sit amet metus vel augue consectetur suscipit.
  </p>
  <p>
    Nam interdum risus vel mi elementum venenatis id a tellus. Proin rutrum magna vel metus convallis laoreet. Sed vel
    purus aliquam nulla finibus sagittis vitae et metus. Curabitur tempus nibh vitae justo aliquam, ut consectetur sem
    porta. Fusce ornare maximus neque sit amet commodo.
  </p>
  <p>
    Pellentesque maximus suscipit ipsum non tempor. Cras sed interdum neque. Curabitur dolor mi, maximus ac augue vitae,
    placerat maximus mi. Cras non metus tellus. Donec mattis urna eget tincidunt efficitur. Integer a pellentesque enim.
    In ipsum ligula, venenatis eget nunc eget, molestie finibus est. Ut hendrerit eu purus eu pulvinar. Pellentesque
    interdum quam in est hendrerit, quis scelerisque metus facilisis. Duis nec lacinia lacus. Nulla a ornare leo.
  </p>
</template>
