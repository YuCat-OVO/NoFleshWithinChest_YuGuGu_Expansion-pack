StartupEvents.registry('fluid', event => {
    event.create('molten_relic')
        .temperature(1500)
        .viscosity(2000)
        .density(2000)
		.luminosity(10)
        .flowingTexture('stray_expansion:fluid/molten_relic')
        .stillTexture('stray_expansion:fluid/molten_relic')
        .bucketColor(0xa34330)
});
StartupEvents.registry('fluid', event => {
    event.create('liquid_fuel')
        .temperature(1000)
        .viscosity(1500)
        .density(1000)
        .flowingTexture('stray_expansion:fluid/liquid_fuel')
        .stillTexture('stray_expansion:fluid/liquid_fuel')
        .bucketColor(0x282441)
});