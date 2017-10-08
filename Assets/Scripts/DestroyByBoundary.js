public class DestroyByBoundary extends MonoBehaviour{
	function OnTriggerExit(other : Collider):void {
		Destroy (other.gameObject);
	}
}