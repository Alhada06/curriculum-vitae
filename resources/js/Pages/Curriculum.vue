<template>
<!--  <Head :title="$t('nav.curriculum')"  />-->
  <WelcomeLayout>

    <div class="py-12 ">
      <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-transparent shadow-sm sm:rounded-lg">
          <div class="p-6 bg-transparent text-white">
            <div class="flex flex-col">
              <transition name="fade" appear>
              <div class="flex flex-col">
                <p class="text-white uppercase text-3xl">{{$t("curriculum.education")}}</p>
                <div v-for="education in this.educations" class="flex flex-col pt-4" >
                  <div class="uppercase font-semibold text-lg">
                    {{education.school}}
                  </div>

                  <div>
                    {{$i18n.locale=== 'en'?education.years_en:education.years}}
                  </div>
                  <div class="text-lg font-semibold pt-1">
                    {{$i18n.locale=== 'en'?education.course_en:education.course}}
                  </div>
                  <div class="whitespace-pre-wrap">
                    {{$i18n.locale=== 'en'?education.course_descriptions_en:education.course_descriptions}}

                  </div>
                  <div>
                    <LoadingBar :limit="education.percentage"></LoadingBar>
                  </div>
                  <div  v-if="education.missing!=null" class="whitespace-pre-wrap">
                    {{$i18n.locale=== 'en'?education.missing_en:education.missing}}

                  </div>

                </div>


<!--                <div class="h-2">-->
<!--                 <LoadingBar :limit="80"></LoadingBar>-->
<!--                </div>-->
              </div>
              </transition>
                <transition name="fade" appear>
                    <div class="flex flex-col pt-6">
                        <p class="text-white uppercase text-3xl">{{$t("curriculum.education")}}</p>
                        <div v-for="education in this.educations" class="flex flex-col pt-4" >
                            <div class="uppercase font-semibold text-lg">
                                {{education.school}}
                            </div>

                            <div>
                                {{$i18n.locale=== 'en'?education.years_en:education.years}}
                            </div>
                            <div class="text-lg font-semibold pt-1">
                                {{$i18n.locale=== 'en'?education.course_en:education.course}}
                            </div>
                            <div class="whitespace-pre-wrap">
                                {{$i18n.locale=== 'en'?education.course_descriptions_en:education.course_descriptions}}

                            </div>
                            <div>
                                <LoadingBar :limit="education.percentage"></LoadingBar>
                            </div>
                            <div  v-if="education.missing!=null" class="whitespace-pre-wrap">
                                {{$i18n.locale=== 'en'?education.missing_en:education.missing}}

                            </div>

                        </div>


                        <!--                <div class="h-2">-->
                        <!--                 <LoadingBar :limit="80"></LoadingBar>-->
                        <!--                </div>-->
                    </div>
                </transition>

            </div>
          </div>
        </div>
      </div>
    </div>
  </WelcomeLayout>

</template>

<script>

import WelcomeLayout from "@/Layouts/WelcomeLayout";
import { Head, Link } from '@inertiajs/inertia-vue3';
import LoadingBar from "@/Components/LoadingBar";
import LocalChanger from '@/Components/LocalChanger';
export default {
  name: "Curriculum.vue",

  components:{
    WelcomeLayout,
    Head,
    Link,
    LocalChanger,
    LoadingBar,
  },
  props:{
    educations:Object,
  }

}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
