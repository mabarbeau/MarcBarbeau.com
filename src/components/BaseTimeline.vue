<template>
  <div class="bg-gray">
    <div class="grid timeline">
      <article>
        <div class="timeline-item">
          <h3>
            2017
            <small>
              Started at Booj
            </small>
          </h3>
          <p>
            <strong>B</strong>e
            <strong>O</strong>riginal
            <strong>O</strong>r
            <strong>J</strong>ealous
          </p>
        </div>
      </article>
      <article>
        <div class="timeline-item">
          <h3>
            2015
            <small>
              First paying role.
            </small>
          </h3>
          <p>
            My first paying gig was for Peloton Digital Agency. I was hired on
            as the third employee of a newly founded start up.
          </p>
        </div>
      </article>
      <article>
        <div class="timeline-item">
          <h3>
            2013
            <small>
              Graduated College
            </small>
          </h3>
          <p>
            I graduated Fort Lewis College with a Bachlors in Computer Science
            Information Systems.
          </p>
        </div>
      </article>
      <article>
        <div class="timeline-item">
          <h3>
            2004
            <small>
              First Website
            </small>
          </h3>
          <p>
            I was first intruduced to HTML in middle school. During lunch, my school
            offered a basic programming class. The instructor taught us the basics
            of HTML and deminstrated how to view the source code behind any website.
          </p>
          <p>
            This gave me an idea. I began by scraping source code from the schools
            website. Next, I reassibmled the website with my own, middle school
            humor, content. Once I had it working, I attempted to trick my friends.
          </p>
          <p>
            "Ew, dirty socks for lunch today." I exclamed pointing at my newly
            created lunch menu. I've been glued to the computer ever since.
          </p>
        </div>
      </article>
      <article>
        <div class="timeline-item">
          <h3>
            1990
            <small>
              Born in Colorado
            </small>
          </h3>
          <p>
            That makes me an english speaking american citizan.
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseTimeline',
};
</script>

<style lang="scss" scoped>
h3{
  letter-spacing: 0.12em;
  display: inline-block;
  text-align: center;
}
small{
  display: block;
  text-align: center;
}
.grid{
  padding-top: 0;
}
.timeline{
  position: relative;
  padding-top: 10em;
  max-width: 1250px;
  margin: auto;
}
.timeline::after {
  display: block;
  clear: both;
  content: "";
}
.timeline::before {
  content: '';
  position: absolute;
  width: 6px;
  background-color: $white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}
.timeline article{
  width: 50%;
  margin-bottom: 10em;
  border-top: 4px solid $white;
  position: relative;
  &:after{
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    top: -19px;
    border-radius: 100%;
    background-color: $white;
    border: 4px solid $primary;
    z-index: 1;
  }
}
.timeline .timeline-item{
  background-color: $white;
  padding: 3em 4em 2em 2em;
  position: relative;
}
.timeline article:nth-child(2){
  margin-top: 15em;
}
.timeline article:nth-child(odd){
  float: left;
  div{
    margin-right: 5em;
  }
  &:after{
    right: -19px;
  }
}
.timeline article:nth-child(even){
  float: right;
  div{
    margin-left: 5em;
  }
  &:after{
    left: -19px;
  }
}

</style>
