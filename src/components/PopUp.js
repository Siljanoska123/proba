

export const PopUp = (props) => {
    console.log(props)
  
  
    return (
     <div className='portfolio-item'>
  
        {props.data 
          ? props.data.map((d, i) => (
  
          
            <div key={`${d.title}-${i}`} class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            {' '}
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">{d.title}</h4>
                  </div>
                  <div class="modal-body">
                   <li> {d.description}</li>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
  
                  </div>
                </div>
              </div>
            </div>
          ))
          : "loading"}
      </div>
  
    )
  }
  