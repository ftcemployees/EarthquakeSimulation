<template>
  <ContainerView>
    <h1 slot="title">Home</h1>
    <section slot="content">
      <h3>What is an Earthquake?</h3>
      <p>
        Earthquakes occur because of a sudden release of stored energy. This
        energy has built up over long periods of time as a result of tectonic
        forces within the earth. Most earthquakes take place along faults in the
        upper 25 miles of the earth's surface when one side rapidly moves
        relative to the other side of the fault. This sudden motion causes chock
        waves (seismic waves) to radiate from their point of origin called the
        <b>focus</b> and travel through the earthquake. Each year there are
        thousands of earthquakes that can be felt by people and over one million
        that are strong to be recorded by instruments. Strong seismic waves can
        cause great local damage and they can travel large distances. But even
        weaker seismic waves can travel far and can be detected by sensitive
        instruments called <b>seismographs</b>.
      </p>
      <h3>What are earthquake (Seismic ) Waves?</h3>
      <p>
        A seismic wave is simply a means of transferring energy from one spot to
        another within the earth. Although seismologists recognize different
        types of waves, we are interested in only two types: P (primary) waves,
        which are similar to sound waves, and S (secondary) waves, which are a
        kind of shear wave. Within the earth, P waves can travel through solids
        and liquids, whereas S waves can only travel through solids.
      </p>
      <h3>What's a Seismogram?</h3>
      <p>
        A highly simplified simulated recording of earthquake waves (a
        seismogram) can be seen to the left. Study this sample seismogram and be
        sure you can identify these parts:
      </p>
      <ul>
        <li>P-waves and the P-wave arrival time</li>
        <li>S-waves and the S-wave arrival time</li>
        <li>S-P interval (expressed in seconds)</li>
        <li>S-wave maximum amplitude (measured in mm)</li>
      </ul>
      <p>
        <b>Note well:</b> This seismogram is a simulation. The actual records of
        earthquake waves are far more complicated than what is presented here.
        As P and S waves travel through the earth, they are reflected by various
        layers of the earth (such as the core-mantle boundary). This interaction
        produces additional seismic waves (phases) which will be detected by
        seismographs. Once you successfully complete this tutorial, you will be
        given links to some seismology labs, where you can see real seismograms.
      </p>
    </section>
    <button
      slot="actions"
      class="btn btn-primary text-light"
      onclick="$('#page-1-tab').click()"
    >
      Next
    </button>
  </ContainerView>
</template>

<script>
import ContainerView from "./ContainerView";
export default {
  name: "Home",
  components: { ContainerView }
};
</script>
