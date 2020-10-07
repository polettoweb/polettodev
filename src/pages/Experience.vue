<template>
  <Layout>
    <section class="resume__container container mx-auto">
      <div class="experience__container flex flex-col">
        <h1>Experience</h1>
        <p class="experience__intro text-copy-primary" data-cy="experience__intro">
          Web development has been a passion of mine since
          1997 that became my full-time job five years ago. I
          really enjoy the challenge that the web brings to
          developers and I like to keep improving and learn
          new technologies. I choose to specialise myself into
          front-end for being able to shape user interfaces
          based on the client needs and for being challenged
          by the constant amount of innovations that the
          front-end world is giving
        </p>
        <ul class="experience">
          <ExpCard
            v-for="item in resumeData"
            :key="item.title"
            :location="item.location"
            :company="item.company"
            :title="item.title"
            :date="item.date"
            :text="item.text"
          />
        </ul>
      </div>
    </section>
  </Layout>
</template>

<script>
import resumeData from "@/assets/json/resume.json";
import ExpCard from "@/components/partials/ExpCard";
export default {
  metaInfo: {
    title: "Resume | CV | Poletto.dev | Marco Poletto | Web Developer | Mentor",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      { name: "author", content: "Marco Poletto Web Developer" },
      {
        name: "description",
        content:
          "Marco Poletto Frontend Web Developer, Tech enthusiast, Coffee aficionado, Gamer, mentor, tutor, resume, cv"
      }
    ]
  },
  components: {
    ExpCard
  },
  data() {
    return {
      resumeData
    };
  }
};
</script>

<style lang="scss">
.experience {
  padding-bottom: 100px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 2px;
    height: 90%;
    background-color: var(--bg-background-secondary);
    left: 50%;
    @media (max-width: 767px) {
      left: 96%;
    }
  }

  &__container {
    padding: 0 20px;

    h3 {
      padding: 0;
    }

    ul {
      width: 100%;
      margin: 32px auto;

      .expcard {
        clear: both;
        width: calc(50% - 30px);
        height: auto;
        position: relative;
        background-color: var(--bg-background-secondary);
        transition: all 0.5s cubic-bezier(0.17, 0.67, 0.5, 1);

        @media (max-width: 767px) {
          width: 88%;
          margin-bottom: 100px;
        }

        &:nth-child(odd) {
          float: left;

          &:before {
            position: absolute;
            content: "";
            font-size: 30px;
            width: 0;
            height: 0;
            border-top: 16px solid var(--text-copy-secondary);
            border-right: 16px solid transparent;
            right: -16px;
            top: 0;
          }

          .dot {
            right: -44px;
            @media (max-width: 767px) {
              right: -7.8vw;
            }
          }
        }

        &:nth-child(even) {
          float: right;
          @media (max-width: 767px) {
            float: left;
          }

          &:before {
            position: absolute;
            content: "";
            width: 0;
            height: 0;
            border-top: 16px solid var(--text-copy-secondary);
            border-left: 16px solid transparent;
            left: -16px;
            top: 0;
            @media (max-width: 767px) {
              left: auto;
              right: -16px;
              border-left: none;
              border-right: 16px solid transparent;
            }
          }

          .dot {
            left: -41px;
            @media (max-width: 767px) {
              left: auto;
              right: -7.8vw;
            }
          }
        }

        &:not(:nth-child(1)) {
          margin-top: -60px;
        }

        &__text {

          p {
            padding: 0 20px;

            &.expcard__location {
              padding-bottom: 10px;
            }

            &.expcard__date {
              padding-bottom: 10px;
              font-weight: bold;
            }
          }
        }

        .dot {
          font-size: 30px;
          position: absolute;
          top: -15px;
          right: 0;
        }
      }
    }
  }
}
</style>
