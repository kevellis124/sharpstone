function VisualizationContainer(props) {

    return (
        <div>
            <h3>Visualization</h3>
            <Svg />
        </div>
    );
}

const Svg = () => {
    return (
        <svg>
        <circle
          cx="150"
          cy="77"
          r="40"
        />
      </svg>
    )
  }

export default VisualizationContainer;