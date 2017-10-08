public class DestroyByTime extends MonoBehaviour{
	public var lifeTime:float;
	function Start() {
		Destroy(gameObject,lifeTime);
	}
}
