<template>
  <div class="bg-gray">
    <div class="grid timeline">
      <article>
        <div class="timeline-item">
          <h3>2017</h3>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci,
            ad nec admodum perfecto mnesarchum. Te elit voluptua
            dignissim per, habeo iusto primis ea eam.
          </p>
        </div>
      </article>
      <article>
        <div class="timeline-item">
          <h3>2017</h3>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci,
            ad nec admodum perfecto mnesarchum, vim ea mazim fierent
            detracto. Ea quis iuvaret expetendis his, te elit voluptua
            dignissim per, habeo iusto primis ea eam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci,
            ad nec admodum perfecto mnesarchum, vim ea mazim fierent
            detracto. Ea quis iuvaret expetendis his.
          </p>
        </div>
      </article>
      <article>
        <div class="timeline-item">
          <h3>2017</h3>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci,
            ad nec admodum perfecto mnesarchum, vim ea mazim fierent
            detracto. Ea quis iuvaret expetendis his, te elit voluptua
            dignissim per, habeo iusto primis ea eam.
          </p>
        </div>
      </article>
      <article>
        <div class="timeline-item">
          <h3>2017</h3>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci,
            ad nec admodum perfecto mnesarchum.
          </p>
        </div>
      </article>
    </div>
  </div>
</template>
<!-- <dl class="timeline">
  <dt>
    First line of code
  </dt>
  <dd>2012</dd>
  <dt>
    First Website
  </dt>
  <dd>2013</dd>
  <dt>
    Graduated
  </dt>
  <dd>2013</dd>
  <dt>
    First Professinal Web Develoment Role
  </dt>
  <dd>2015</dd>
</dl> -->

<script>
export default {
  name: 'BaseTimeline',
};
</script>

<style lang="scss" scoped>
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
    top: -15px;
    border-radius: 100%;
    background-color: $primary;
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
    right: -15px;
  }
}
.timeline article:nth-child(even){
  float: right;
  div{
    margin-left: 5em;
  }
  &:after{
    left: -15px;
  }
}
</style>
