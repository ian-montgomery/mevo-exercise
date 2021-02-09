const mapSettings = {

    layer: {
        zoneFill: {
            id: "MevoHomeZones",
            type: "fill",
            // source: 'source',
            // layout: {},
            paint: {
                "fill-color": "#FFFFFF",
                "fill-opacity": 0.5
            }
        },
        zoneLines: {
            id: "line",
            type: "line",
            // source: 'mevoData',
            // layout: {},
            paint: {
                "line-color": "#F7590D",
                "line-width": 2
            }
        }
    },

    navControl: {
        right: 18,
        top: 10
    }
}

export default mapSettings