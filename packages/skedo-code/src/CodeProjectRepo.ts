import {CodeProject} from './CodeProject'
import {codeProjectRemote, fileRemote} from '@skedo/request'
export class CodeProjectRepo {
  project : CodeProject 

  constructor(project : CodeProject) {
    this.project = project
  }

  public async save(){

    for(let update of this.project.getRootNode().getUpdates()) {
      const result = await fileRemote.post1(
        "/codeless",
        update.getExt(),
        update.getContent()
      )
      update.setUrl(result.data)
      update.updated()
    }

    await codeProjectRemote.put(
      this.project.getName(),
      this.project.toJSON()
    )

    console.log('project saved.', this.project.toJSON())

  }

  public static async load(name : string) {
    
    const result = await codeProjectRemote.get(name)
    return CodeProject.fromJSON(result.data)

  }

}